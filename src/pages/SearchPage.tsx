import React from 'react';
import { useEffect, useState } from 'react'
import Card from '../compoments/Card';
import {  useLocation } from "react-router-dom";
import AddButton from '../compoments/AddButton';

interface CardDetail{
    name: string,
    place: string
}

const SearchPage = () => {
    const { search } = useLocation();
    const query = React.useMemo(() => new URLSearchParams(search), [search]);
    const q= (query.get("q"));
    if(q == null)
        return (<div><AddButton onClick={() => {alert("Adding")}}/></div>)
    const [result, setResult] = useState<CardDetail[]>([]);

    // Fetch data
    useEffect(() => {
        /*
        Requesting all data
        `BaseURL/api/item/search/{query}`

        the query is used for the item name and place name

        Expects an return of 
        [
            {name: "item1", place: "showroom1"},
            {name: "item2", place: "showroom2"},
            {name: "item3", place: "showroom1"}
        ]
        */
        setResult([
            {name: "item1", place: "showroom1"},
            {name: "item2", place: "showroom2"},
            {name: "item3", place: "showroom1"},
            {name: q,  place: "test"}
        ])
    }, [q]);

    if(result.length == 0) return (<div />)
    return (<div className='card-display'>
        {result.map(x => <Card name={x.name} place={x.place}/>)}
        <AddButton onClick={() => {alert("Adding")}}/>
    </div>);
}

export default SearchPage;