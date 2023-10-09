import { useState } from 'react'
import {useNavigate } from "react-router-dom";

const Navbar = () => {
    const [seatch, setSeatch] = useState("")
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div onClick={() => navigate("/")}>Home</div>
            <div className="search-bar">
                <input value={seatch} onChange={(e) => setSeatch(e.target.value)} placeholder="Search item..." type="text"/>
                <div className="button" onClick={() => {
                    navigate(`/search?q=${seatch}`)
                }}>Search</div>
            </div>
            <div>Logo</div>
        </div>
    )
}

export default Navbar;