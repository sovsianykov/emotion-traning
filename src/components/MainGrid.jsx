import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import GridItem from "./GridItem";
import api from '../modules/api/api'
import {BEERS} from "../modules/api/endpoints";

const Grid = styled.div`
    width: 100% ;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat( 3 , 33.3% );
  
`;


const MainGrid =() => {
    const [items, setItems ] = useState([])
    useEffect(
        async ()=>{
     const response = await api.fetch(BEERS)
        setItems(items.concat(response))
        console.log(items)
    },[])
    console.log(items)
    return (
        <Grid>
            {items&&items.map(item => (<GridItem key={item.id} item ={item}/>))}
        </Grid>
    );
}

export default MainGrid;
