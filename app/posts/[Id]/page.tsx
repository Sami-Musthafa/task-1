"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { Post } from "../page";

// type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

const styles = {
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

const PostId = (props: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const params = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${params.Id}`
        );
        setPosts(response.data);
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
          <Link href={"/posts"}>
            <button style={styles.button}>&lt;</button>
          </Link>
          <div style={styles.post}>
            <div>Id: {posts.id}</div>
            <div>Title: {posts.title}</div>
            <div>Body: {posts.body}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostId;
