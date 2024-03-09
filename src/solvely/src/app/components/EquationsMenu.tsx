import React from 'react'

function EquationLabel({ equation }: { equation: string }) {
    return (
    <div className='text-sm min-h-8 ml-2 text-slate-400 border-l-2 cursor-pointer hover:bg-slate-500 border-slate-400 flex items-center'>
        <p className='ml-4 '>{equation}</p>
    </div>
    );
}

const equations = new Array(7).fill("MATH")

export default function EquationsMenu({ isVisible }: { isVisible: boolean }) {
  return (
    <div className={`w-64 h-72 fixed top-24 bg-slate-700 rounded-md ${isVisible ? "" : "hidden"}`}>
        <div className='w-full h-10 flex flex-col items-center '>
            <input className='max-w-48 h-8 mt-2 outline-none text-center border-[.5px] border-white text-base bg-transparent pl-4 pr-4 rounded placeholder:text-center'
            placeholder='Search for an equation'></input>
            {/* <div className='h-[1px] w-[90%] bg-white'></div> */}
        </div>
        <div className='mt-3 max-h-56 overflow-hidden'>
            {
                equations.map(equation => (
                    <EquationLabel equation={equation}></EquationLabel>
                ))
            }
        </div>
    </div>
  )
}
