"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import router, { useRouter } from "next/router";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Typography,
} from "@mui/material";
import next from "next";
import Link from "next/link";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div
      style={{
        height: "100vh",
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
      <TableContainer component={Paper} sx={{ width: "90%" }}>
        <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center">User Id</TableCell>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((post) => (
                <TableRow key={post.id}>
                  <TableCell>
                    {" "}
                    <Link href={`./posts/${post.id}`}>{post.userId}</Link>
                  </TableCell>
                  <TableCell>
                    <Link href={`./posts/${post.id}`}>{post.id}</Link>
                  </TableCell>
                  <TableCell>
                    <Link href={`./posts/${post.id}`}>
                      {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href={`/posts/${post.id}`}>
                      {post.body.charAt(0).toUpperCase() + post.body.slice(1)}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={posts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{ color: "white" }}
        />
      </div>
    </div>
  );
};

export default Posts;
