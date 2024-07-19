import React from 'react'
import { Link } from 'react-router-dom'

function MoreProjectNav() {
  return (
    <>
        <span className=" mx-auto md:px-24 px-7 flex justify-between flex-col md:flex-col ">
        <Link to={"/project"}>
          <h3 className="text-lg font-bold text-slate-600 hover:text-purple-700 ">More Projects {"  --->"}</h3>
        </Link>
      </span>
    </>
  )
}

export default MoreProjectNav