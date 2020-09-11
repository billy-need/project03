import React, { useState, useRef, useEffect } from 'react'
import '../App.css';

export default function FilterOptions() {

    const [filterState, setState] = useState([])

    const filterRef = useRef();

    const filterChange = (e) => {
        setState(e.target.value)
    }

    useEffect(() => {
        console.log('filter set to = ' + JSON.stringify(filterState));
    }, [filterState]);

    return (
        <select className="custom-select mr-sm-2" id="filter" value={filterRef} onChange={filterChange}>
            <option value="all">All</option>
            <option value="active" >Active</option>
            <option value="completed" >Completed</option>
        </select>
    )
}

