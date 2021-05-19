import React, { useState, useEffect } from 'react'
import './main.css'

const Main = () => {

    const getMode = () => {
        return JSON.parse(localStorage.getItem("mode")) || false
    }

    const [dark, setMode] = useState(getMode());

    useEffect(() => {
        localStorage.setItem("mode", JSON.stringify(dark))
    }, [dark])



    return (
        <div className={dark ? "dark-mode" : ""}>
            <div className="nav">
                <label className="switch">
                    <input type="checkbox" checked={dark} onChange={() => setMode(!dark)} />
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="content">
                <h1>
                    {dark ? "Dark Mode on." : "Light Mode on."}
                </h1>
                <p style={{ fontSize: "22px" }}>
                    Press to to toggle to {dark ? "light" : "dark"} mode.
                </p>
            </div>
        </div>
    )
}

export default Main
