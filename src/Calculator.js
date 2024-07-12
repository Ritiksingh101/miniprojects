import React, { useState } from 'react'

function Calculator() {
    const [value, setValue]= useState("")
    return (
        <div className='main'>
            <div className='container'>
                <div className='top-src'>
                    {value}
                </div>
                <div className='button'>
                    <div onClick={()=>setValue("")} className='button-num'>AC</div>
                    <div onClick={()=>setValue(value.slice(0, value.length-1))} className='button-num'>BK</div>
                    <div onClick={()=>setValue(eval(value))}className='button-num'>=</div>
                    <div onClick={()=>setValue(value+"/")} className='button-num'>/</div>
                    <div onClick={()=>setValue(value+"7")} className='button-num'>7</div>
                    <div onClick={()=>setValue(value+"8")} className='button-num'>8</div>
                    <div onClick={()=>setValue(value+"9")} className='button-num'>9</div>
                    <div onClick={()=>setValue(value+"*")} className='button-num'>X</div>
                    <div onClick={()=>setValue(value+"4")} className='button-num'>4</div>
                    <div onClick={()=>setValue(value+"5")} className='button-num'>5</div>
                    <div onClick={()=>setValue(value+"6")} className='button-num'>6</div>
                    <div onClick={()=>setValue(value+"-")} className='button-num'>-</div>
                    <div onClick={()=>setValue(value+1)} className='button-num'>1</div>
                    <div onClick={()=>setValue(value+"2")} className='button-num'>2</div>
                    <div onClick={()=>setValue(value+"3")} className='button-num'>3</div>
                    <div onClick={()=>setValue(value+"+")} className='button-num'>+</div>
                </div>


            </div>


        </div>
    )
}

export default Calculator