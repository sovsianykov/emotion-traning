import React from "react";
import Navbar from "../components/Navbar";
import MainGrid from "../components/MainGrid";
import Footer from "../components/Footer";
import styled from "@emotion/styled";

const Home = styled.div`
  color: brown;
  font-family: "Roboto Light", sans-serif;
  text-align: center;
  max-width: 1400px;
`;

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Home>
          <h1>Hello, Carlyle !</h1>
          <MainGrid />
          <Footer />
        </Home>
      </div>
    </>
  );
};

export default Homepage;
