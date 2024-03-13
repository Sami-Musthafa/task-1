// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter, useParams } from "next/navigation";
// import axios from "axios";
// import Link from "next/link";

// type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

// const styles = {
//   post: {
//     background: "#378CE7",
//     color: "white",
//     width: "100%",
//     height: "87vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "start",
//     justifyContent: "center",
//     padding: "10rem",
//   },
//   button: {
//     padding: "1rem",
//     margin: "1rem",
//     borderRadius: "15px",
//     boxShadow: "#f95959",
//     color: "white",
//     backgroundColor: "#f95959",
//   },
// };

// type Props = {};

// const PostId = (props: Props) => {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const router = useRouter();

//   const params = useParams();

//   const [pageId, setPageId] = useState(1);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get(
//           `https://jsonplaceholder.typicode.com/posts/${params.Id}`
//         );
//         setPosts(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <Link href={"../posts"}>
//         <button style={styles.button}>&lt;</button>
//       </Link>
//       <div style={styles.post}>
//         <div>Id: {posts.id}</div>
//         <div>Title: {posts.title}</div>
//         <div>Body: {posts.body}</div>
//       </div>
//     </div>
//   );
// };

// export default PostId;
