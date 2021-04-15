import React, { useEffect } from "react";
import styled from "@emotion/styled";
import GridItem from "./GridItem";
import {BEERS} from "../modules/api/endpoints";
import {useDispatch, useSelector} from "react-redux";
import { fetchAll } from "../modules/api/actions";

const Grid = styled.div`
    width: 100% ;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat( 3 , 33.3% );
  
`;


const MainGrid =() => {
    const dispatch = useDispatch()
    // const [items, setItems ] = useState([])
    useEffect( () =>{
      dispatch(fetchAll())
    },[dispatch])
     const state = useSelector(state => state.api[BEERS])
     const items = state.data
    console.log(state)
    console.log(items)
    return (
        <Grid>
            {items&&items.map(item => (<GridItem key={item.id} item ={item}/>))}
        </Grid>
    );
}

export default MainGrid;
