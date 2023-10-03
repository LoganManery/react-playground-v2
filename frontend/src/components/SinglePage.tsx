import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import VerticalNav from './VerticalNav';
import Tooltip from './Basic Components/Tooltip';

function SinglePage() {
  return (
    <div className="flex flex-row w-screen h-screen bg-slate-400">
      <VerticalNav />
      <div className="w-11/12 h-screen bg-white self-end overflow-y-scroll">
        <div className="flex flex-col bg-red-500 w-full h-1/4 text-center">
          <p className="m-auto text-8xl font-extrabold">Hello</p>
          <div className="p-10 flex space-x-4">
          <Tooltip content="This is a tooltip!" position="top">
            <button className="p-2 bg-blue-500 text-white rounded">Hover me (Top)</button>
          </Tooltip>

          <Tooltip content="Another tooltip!" position="right">
            <button className="p-2 bg-blue-500 text-white rounded">Hover me (Right)</button>
          </Tooltip>
        </div>
        </div>
        <div className="flex flex-col bg-blue-500 w-full h-1/4"><p className="m-auto text-6xl font-bold">Welcome</p></div>
        <div className="flex flex-col bg-yellow-500 w-full h-1/4"><p className="m-auto text-6xl font-semibold">Heading 1</p></div>
        <div className="flex flex-col bg-green-500 w-full h-1/4"><p className="m-auto text-4xl font-semibold">Heading 2</p></div>
        <div className="flex flex-col bg-red-500 w-full h-1/4"><p className="m-auto text-4xl font-semibold">Heading 3</p></div>
        <div className="flex flex-col bg-blue-500 w-full h-1/4"><p className="m-auto text-4xl font-semibold">Heading 4</p></div>
        <div className="flex flex-col bg-yellow-500 w-full h-1/4"><p className="m-auto text-4xl font-semibold">Heading 5</p></div>
        <div className="flex flex-col bg-green-500 w-full h-1/4"><p className="m-auto text-4xl font-semibold">Heading 6</p></div>
      </div>
    </div>
  )
}

export default SinglePage;





