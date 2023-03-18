import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div>
    <h1>PageNotFound</h1>
    <h3>
        Go to the <Link to="/">Home Page</Link>
        </h3> 
    </div>

  )
}
