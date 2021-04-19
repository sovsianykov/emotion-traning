import React, {Fragment} from "react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";

const Navb = styled.nav`
  position: fixed;
  z-index: 1;
  top: 0;
  max-width: 1400px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto Light", sans-serif;
  background-color: brown;
  color: aliceblue;
`;
const Brand = styled.div`
  width: 100px;
  margin-left: 20px;
  margin-right: auto;
  padding: 5px;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  line-height: 3rem;
`;
const Input = styled.input`
  margin-right: 20px;
  height: 30px;
  border-radius: 5px;
`;

const Navbar = () => {
  return (
     <Fragment>
         <div className="container">
             <Navb>
                 <Link to = {'/'}>
                     <Brand>Emotions</Brand>
                 </Link>
                 <Input type="text" />
             </Navb>
         </div>
     </Fragment>
  );
};

export default Navbar;
