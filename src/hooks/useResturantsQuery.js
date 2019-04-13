// import React, { useEffect, useState } from "react";

// import { useQuery } from "react-apollo-hooks";

// const query = `
//   query {
//     listTodos {
//       items {
//         id
//         name
//         description
//       }
//     }
//   }
// `;

// export default function() {
//   const [todos, updateTodos] = useState([]);

//   useEffect(async () => {
//     try {
//       const todoData = await API.graphql(graphqlOperation(query));
//       updateTodos(todoData.data.listTodos.items);
//       const { data, loading } = useQuery(query, {
//         variables: { numRepos: 25 },
//         suspend: false
//       });

//     } catch (err) {
//       console.log("error: ", err);
//     }
//   }, []);

//   return todos;
// }
