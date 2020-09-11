import React, { useState, useRef, useEffect } from 'react'
import '../App.css';

export default function CheckBox() {

    const [checkboxState, setState] = useState([])

    const checkboxRef = useRef();

    const handleChecked = (e) => {
        setState(e.target.value)
    }

    useEffect(() => {
        console.log('filter set to = ' + JSON.stringify(checkboxState));
    }, [checkboxState]);

    return (
        <div>
            <input type="checkbox" checked={checkboxState.checked} onChange={handleChecked} />
        </div>
    )
}
