import React from 'react'
import {Link} from 'react-router-dom'

export default function Error404() {
  return (
    <div>
        <div className="alert alert-danger" role="alert">
        ERROR 404 PAGE NOTE FOUND ! BACK TO <Link to="/">HOME</Link>
        </div>
    </div>
  )
}
