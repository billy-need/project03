import React from 'react'
import '../App.css';
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../redux/actions';

export default function FilterOptions() {

    // store selectors and dispatch
    const filterState = useSelector(state => state.taskFilter);
    const dispatch = useDispatch();

    // set filter state
    const setFilterOptions = (e) => {
        switch (e.target.value) {
            case 'active':
                dispatch(setFilter('active'));
                break;
            case 'complete':
                dispatch(setFilter('complete'));
                break;
            default:
                dispatch(setFilter('all'));
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
