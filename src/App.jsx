import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import HeaderBottom from "./components/Header/HeaderBottom";
import Main from "./components/Main/Main";

const App = () => {
  //Axios
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=AIzaSyATMZLqRP0Qn1E6opgWrw1D1CCi2RTQIWA" + "&maxResults=40").then((res) => setData(res.data.items)).catch((err) => console.log(err));
    }
  };
  return (
    <>
      <Header search={search} setSearch={setSearch} searchBook={searchBook} />
      <HeaderBottom data={data} />
      <Routes>
        <Route path="/" element={<Main data={data} />} />
      </Routes>
    </>
  );
};

export default App;
