"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const styles: any = {
  post: {
    background: "#378CE7",
    color: "white",
    width: "100%",
    height: "87vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    padding: "10rem",
  },
  button: {
    padding: "1rem",
    margin: "1rem",
    borderRadius: "15px",
    boxShadow: "#f95959",
    color: "white",
    backgroundColor: "#f95959",
  },
};

type Props = {};

const PostPage = (props: Props) => {
  const [post, setPost] = useState<Post>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const params = useParams();

  const [pageId, setPageId] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${params.Id}`
        );
        setPost(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          "Loading...."
        </div>
      ) : (
        <div>
          <button style={styles.button} onClick={() => router.back()}>
            &lt;
          </button>

          <div style={styles.post}>
            <div>Id: {post?.id}</div>
            <div>Title: {post?.title}</div>
            <div>Body: {post?.body}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostPage;
