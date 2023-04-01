import React from 'react'

function Filter({item, setItem}) {
    
    const tapGetir = (e) => {
        setItem(e.target.value)
    }
    return (
        <form className='text-center' >
            <input value={item} onChange={tapGetir} type="text"  className='p-2 rounded border' placeholder='Search' style={{ width: "30rem" }} />
        </form>
    )
}

export default Filter