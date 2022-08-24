import React from 'react'
import classnames from 'classnames'

export default function InputHelper(props) {
  return (
    <div className="form-group">
        <label htmlFor="f_name">{props.label}</label>
        <input type={props.type}
         name={props.name} 
         id={props.id} 
         className={classnames('form-control', {
           'is-invalid' : props.error
         })}
         value={props.value}
        onChange={props.onChange} 
        />
        <div className="invalid-feedback">{props.error}</div>
    </div>
  )
}
