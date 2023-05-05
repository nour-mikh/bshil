import Image from 'next/image'
import React, { useEffect } from 'react'

export const Item = (props) => {

  return (
    <div className="flex w-100% relative m-8 m-6 rounded-3xl bg-gray-100 shadow-md">
      <img src={props.image} alt={''} className="w-36 h-36 mt-2 mx-8" ></img>
      <div className="flex flex-nowrap mt-2 mx-8">
        <div className="flex flex-col w-full ml-4">
          <div className="my-4">{props.title}</div>
          <span className="bg-gray-700 h-0.5 w-64 rounded-md"></span>
          <div className="my-4">{props.description}</div>
          <div className='my-4'> ${props.price}</div>
        </div>
        <button className="btn w-32 h-8 items-center content-center rounded-xl text-white m-16 bg-gray-400 hover:bg-gray-500" >
          By {props.user}
        </button>
      </div>
    </div>
  )
}
export default Item 