// "use client";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// // import { useRouter } from "next/navigation";
// // import { useSearchParams } from "next/navigation";

// const styles = {
//   post: {
//     background: "#378CE7",
//     color: "white",
//     width: "100%",
//     height: "87vh",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   button: {
//     padding: "10px",
//     backgroundColor: "#f95959",
//     paddingRight: " 0 20px",
//     borderRadius: "20px",
//     margin: "0 10px",
//     color: "#e3e3e3",
//   },
// };

// interface Post {
//   id: number;
//   userId: number;
//   title: string;
//   body: string;
// }

// const page = () => {
//   // const router = useRouter();
//   // const searchParams = useSearchParams();
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [page, setPage] = useState(1);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axios.get(
//           `https://jsonplaceholder.typicode.com/posts`
//         );
//         setPosts(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   // const handleNav = (pageNumber: number) => {
//   //   const currentPage = page + pageNumber;
//   //   const params = new URLSearchParams(searchParams.toString());
//   //   params.set('page', currentPage.toString());
//   //   router.push(`/posts?${params.toString()}`);
//   // };

//   const handleNext = () => {
//     setPage(page + 1);
//     // router.push(`/page/${page + 1}`);
//   };
//   const handlePrev = () => {
//     setPage(page > 0 ? page - 1 : 0);
//     // router.push(`/page/${page - 1}`);
//   };

//   return (
//     <>
//       {isLoading ? (
//         "Loading..."
//       ) : (
//         <div>
//           <div
//             style={{
//               textAlign: "center",
//               color: "white",
//               backgroundColor: "#378CE7",
//               fontSize: "3rem",
//               paddingTop: "20px",
//             }}
//           >
//             <h1> Post - {page}</h1>
//           </div>
//           <div style={styles.post}>
//             <button style={styles.button} onClick={handlePrev}>
//               Prev
//             </button>
//             {page === 0
//               ? "No posts"
//               : posts.slice(page - 1, page).map((post) => (
//                   <div style={{ padding: "3rem" }}>
//                     <div>Id: {post.id}</div>
//                     <div>Title: {post.title}</div>
//                     <div>Body: {post.body}</div>
//                   </div>
//                 ))}
//             <button style={styles.button} onClick={handleNext}>
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default page;
