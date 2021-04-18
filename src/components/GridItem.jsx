import React,{ useState } from "react";
import styled from "@emotion/styled";
import BeerModal from "./Modal/BeerModal";
import { Link } from "react-router-dom";

const Gitem = styled.div`
    background-color: antiquewhite;
    border-radius: 12px;
     border: 1px solid #ddd;
    min-height: 200px;
    text-align: center;
     padding: 20px;
     position: relative;
`;
const Image = styled.img`
  width: 30px;

` ;
const Text = styled.h4`
   font-family: "Roboto Light",sans-serif;
   color: dimgray;
   text-align: center;
   
` ;
const Btn = styled.button`
  position: absolute;
  left: 80px;
  bottom: 20px;
  background-color: brown;
  color: white;
  border: none;
  border-radius: 5px;
  letter-spacing: 0.1em;
  padding: 0 5px ;
  height: 30px;
  width: 120px;
  cursor: pointer;
  
`;


const GridItem =({item}) => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <Gitem component = {Link}
        to = {{ pathname : 'article/' + item.id,
            state : item }}
        >
            <h3>{item.name}</h3>
            <Image src={item.image_url} alt='image'/>
            <Btn  onClick={() => setModalActive(true)}>show more</Btn>

            <BeerModal active={modalActive} setActive={setModalActive}  >
                <Text >
                    {item.name}
                </Text>
                <Text >
                    {item.tagline}
                </Text>
                <Text >
                    {item.description}
                </Text>
                <Text  >
                    brewers tips : <br/>{item.brewers_tips} <br/>
                    first brewed : <br/>{item.first_brewed}
                </Text>

            </BeerModal>
        </Gitem>
    );
}

export default GridItem;
