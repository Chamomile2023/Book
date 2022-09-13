import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Modal from "./components/Modal/Modal";
import Login from "./components/Login/Login";

const App = () => {
  //Axios
  const [search, setSearch] = useState("python");
  const [data, setData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyATMZLqRP0Qn1E6opgWrw1D1CCi2RTQIWA" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&key=AIzaSyATMZLqRP0Qn1E6opgWrw1D1CCi2RTQIWA" +
          "&maxResults=40"
      )
      .then((res) => setData(res.data.items))
      .catch((err) => console.log(err));
  }, [search]);
  return (
    <>
      {/* <Header search={search} setSearch={setSearch} searchBook={searchBook} /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main data={data} setData={setData} />} />
        {/* <Route path="/modal" element={<Modal data={data} />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Modal data={data} /> */}
    </>
  );
};

export default App;
