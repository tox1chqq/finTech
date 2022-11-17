import React from "react";


export const Convert = () => {
    return <>
        <div className='flex justify-evenly items-center gap-5 pt-40'>
            <div className='flex justify-center items-center gap-5 flex-col'>
                <h3>Current valute</h3>
                <h4>VALUTE</h4>
                <input className='border-black border border-1  border-t-0 border-r-0 border-l-0  outline-0'/>
            </div>
            <hr className='border-indigo-500 border-t-[150px] w-[1px]'/>
            <div className='flex justify-center items-center gap-5 flex-col'>
                <h3>Selected valute</h3>
                <h4>VALUTE</h4>
                <input disabled  className='border-black border border-1  border-t-0 border-r-0 border-l-0  outline-0 bg-transparent'/>
            </div>
        </div>
    </>
}