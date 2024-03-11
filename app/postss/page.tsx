// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import CustomPaginationActionsTable from "../postss/newPagination";

// interface Post {
//   id: number;
//   title: string;
//   body: string;
// }

// const postsPage = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//   });
//   const posts: Post[] = await res.json();

//   return (
//     <div>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
//           <TableHead>
//             <TableRow>
//               <TableCell align="left">Id</TableCell>
//               <TableCell align="left">Title</TableCell>
//               <TableCell align="left">Body</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {posts.map((post) => (
//               <TableRow
//                 key={post.id}
//                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//               >
//                 <TableCell align="left">{post.id}</TableCell>
//                 <TableCell align="left">{post.title}</TableCell>
//                 <TableCell align="left">{post.body}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//         <CustomPaginationActionsTable />
//       </TableContainer>
//     </div>
//   );
// };

// export default postsPage;
