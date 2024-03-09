"use client"
import React from 'react'
import EquationsMenu from './EquationsMenu'
import { createContext, useState } from 'react'


export default function Hearder({ equationSelected }: { equationSelected: string }) {

  const [isMenuVisible, setIsMenuVisible] = useState(false)

  
  return (
        <header className='h-20 w-min-screen bg-slate-900 flex justify-center items-center text-2xl font-sans'>
          Solving <button className='ml-2 mr-2 text-[yellow]'
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          >{equationSelected}</button> Equation
          <EquationsMenu isVisible={isMenuVisible}></EquationsMenu>
        </header>
  )
}
