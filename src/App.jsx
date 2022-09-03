import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import HeaderBottom from "./components/Header/HeaderBottom";
import Main from "./components/Main/Main";

const App = () => {
  const [data, setData] = useState([]);
  const URL = "https://www.googleapis.com/books/v1/volumes?q=search+terms";
  const getData = async () => {
    const request = await fetch(URL);
    const response = await request.json();
    setData(response);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Header />
      <HeaderBottom />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
