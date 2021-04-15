import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import GridItem from "./GridItem";
import api from '../modules/api/api'
import {BEERS} from "../modules/api/endpoints";
import {useDispatch, useSelector} from "react-redux";
import {apiActions} from "../modules/api/actions";

const Grid = styled.div`
    width: 100% ;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat( 3 , 33.3% );
  
`;


const MainGrid =() => {
    const dispatch = useDispatch()
    const [items, setItems ] = useState([])
    useEffect(() =>{
        dispatch(apiActions.fetch(BEERS))

    })
     const state = useSelector(state => state)

    console.log(state)
    return (
        <Grid>
            {/*{items&&items.map(item => (<GridItem key={item.id} item ={item}/>))}*/}
        </Grid>
    );
}

export default MainGrid;
