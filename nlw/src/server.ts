import express from "express";

// import React from "react";

// import "./button.css";
// import icon from ".button.png";

// function Button() {
//   return (
//     <button>
//       <img src={icon} />
//     </button>
//   );
// }

const app = express();

app.get("/users", (request, response) => {
  console.log("List of users");

  response.json(["Gui", "Leo", "Livia"]);
});

app.listen(3333);
