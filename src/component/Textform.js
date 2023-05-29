import React, { useState } from 'react'

export default function Textform() {
    
    const ChangedToUpperCase = ()=>{
        let UText = text.toUpperCase();
        setText(UText)

    }
    const changedToLowerCase = ()=>{
        let lText = text.toLowerCase();
        setText(lText);

    }

    const removed = ()=>{
        let rtext = '';
        setText(rtext)

    }
    const updatedChanged = (event)=>{
        setText(event.target.value)
    }
    const[text, setText] = useState('');

  return (
    <>
    <div className='container mt-5'>
                <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} id="exampleFormControlTextarea1" onChange={updatedChanged} rows="3"></textarea>
            </div>
            <button type="button" className="btn btn-outline-primary m-1" onClick={ChangedToUpperCase}>UpperCase</button>
            <button type="button" className="btn btn-outline-secondary m-1" onClick={changedToLowerCase}>Lowercase</button>
            <button type="button" className="btn btn-outline-danger m-1" onClick={removed}>Remove</button>
    </div>
    </>
  )
}
