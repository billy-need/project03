import React, { useState, useRef, useEffect } from 'react'
import '../App.css';
import { useSelector, useDispatch } from 'react-redux'
import { addTask, setFilter } from '../redux/actions';

export default function FilterOptions() {

    // store selectors and dispatch
    const taskState = useSelector(state => state.tasks);
    const filterState = useSelector(state => state.taskFilter);
    const dispatch = useDispatch();

    // set filter state
    const setFilterOptions = (e) => {
        switch (e.target.value) {
            case 'active':
                dispatch(setFilter('active'));
                return taskState.filter(task => !task.complete);
            case 'complete':
                dispatch(setFilter('complete'));
                return taskState.filter(task => task.complete);
            default:
                dispatch(setFilter('all'));
                return taskState;
        }
    }

    return (
        <div className="form-group col-md-4">
            <select className="custom-select mr-sm-2 form-control" id="filter" value={filterState.taskFilter} onChange={setFilterOptions}>
                <option value="all" >All</option>
                <option value="active" >Active</option>
                <option value="complete">Completed</option>
            </select>
        </div>
    )
}
