import React from "react";
import axios from "axios";

export default function Dashboard() {
  axios.get("/tampil/").then((response) => {
    console.log(response.data);
  });
  return <h2>Dashboard</h2>;
}
