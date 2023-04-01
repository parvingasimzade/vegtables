import React from 'react'
import { FaReact } from "react-icons/fa"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark container">
            <a className="navbar-brand d-flex align-items-center gap-2" href="/"><FaReact size={44} /> <span className='fs-3'>Vegtables Store</span></a>
        </nav>
    )
}

export default Navbar