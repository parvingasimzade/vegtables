import { nanoid } from 'nanoid'
import React from 'react'
import Card from './Card'

function Section({data,item}) {
    return (
        <div className='d-flex container justify-content-center gap-5 py-5 flex-wrap' >
            {data.filter(i => i.name.toLowerCase().includes(item)).map(item => <Card key={nanoid()} data={item}/>)}
        </div>
    )
}

export default Section