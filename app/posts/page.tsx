"use client";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import axios from "axios";
import router, { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Typography,
  TableCell,
} from "@mui/material";
import next from "next";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const styles = {
  post: {
    background: "red",
    margin: 20,
  },
};

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const itemsPerPage = 5;

  const fetchPosts = useCallback(async (currentPage: number) => {
    setIsLoading(true);
    try {
      const start = itemsPerPage * (currentPage - 1);
      const postsReq = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${itemsPerPage}`
      );
      const res: Post[] = await postsReq.json();
      setPosts(res);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  const handlePage = (pageNumber: number) => {
    const currentPage = page + pageNumber;
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", currentPage.toString());
    router.push(`/posts?${params.toString()}`);
  };

  useEffect(() => {
    const currentPage = searchParams.get("page") ?? page;
    setPage(Number(currentPage));
    fetchPosts(Number(currentPage));
  }, [searchParams, page, fetchPosts]);

  return (
    <div>
      <div
        style={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Monospace",
            fontStyle: "italic",
            color: "white",
            fontWeight: "900",
            padding: "0.5rem",
          }}
        >
          Posts
        </Typography>

        <Suspense>
          <div>
            {isLoading && (
              <div
                style={{
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                Loading...
              </div>
            )}
            {!isLoading && posts.length > 0 && (
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TableContainer
                    component={Paper}
                    sx={{
                      width: "90%",
                    }}
                  >
                    <Table
                      sx={{ minWidth: 650 }}
                      stickyHeader
                      aria-label="sticky table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">User Id</TableCell>
                          <TableCell align="center">ID</TableCell>
                          <TableCell align="center">Title</TableCell>
                          <TableCell align="center">Body</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {posts.map((post: Post) => (
                          <TableRow
                            key={post.id}
                            component={Link}
                            href={`./posts/${post.id}`}
                          >
                            <TableCell> {post.userId}</TableCell>
                            <TableCell>{post.id}</TableCell>
                            <TableCell>
                              {post.title.charAt(0).toUpperCase() +
                                post.title.slice(1)}
                            </TableCell>
                            <TableCell>
                              {post.body.charAt(0).toUpperCase() +
                                post.body.slice(1)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginBottom: 24,
                  }}
                ></div>
              </div>
            )}
            {!isLoading && posts.length === 0 && (
              <div
                style={{
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                No Posts
              </div>
            )}
          </div>
        </Suspense>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            color: "white",
          }}
        >
          <div>
            <button
              style={{
                width: "60px",
                backgroundColor: "#f95959",
                height: "40px",
                borderRadius: "20px",
              }}
              disabled={page === 1}
              onClick={() => handlePage(-1)}
            >
              Prev
            </button>
          </div>
          <div>
            Page: {page} ({(page - 1) * itemsPerPage + 1} to{" "}
            {page * itemsPerPage})
          </div>
          <div>
            <button
              style={{
                width: "60px",
                backgroundColor: "#f95959",
                height: "40px",
                borderRadius: "20px",
              }}
              onClick={() => handlePage(1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
