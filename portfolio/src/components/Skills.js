import React from 'react'
import skills from '../data/skills'
import { nanoid } from 'nanoid'

export default function Skills() {

    const skillElements = skills.map(ele =>
        <div className='skill' key={nanoid()}>
            <img src={ele.imgLink} alt={ele.name} className='up-when-hover' />
            <small><b>{ele.name}</b></small>
        </div>
    )
    return (
        <div className='skills' id='skills'>
            {skillElements}
        </div>
    )
}

