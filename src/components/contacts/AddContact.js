import axios from 'axios'

import React, { Component } from 'react'
import { Consumer } from '../context'
import InputHelper from '../helpers/InputHelper'

export default class addContact extends Component {

  state = {
    id: '',
    name: '',
    email: '',
    phone: '',
    errors: {}
  }

  url = "https://jsonplaceholder.typicode.com/users"


  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value

    })
  }

  cleanForm() {
    this.setState({
      id: '',
      name: '',
      email: '',
      phone: '',
      errors : ''
    })
  }

  Submit = (dispatch, size, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    if (name === "") {
      this.setState({ errors: { name: "Name is Required!" } })
      return false;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is Required!" } })
      return false;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is Required!" } })
      return false;
    }

    const newContact = {
        name: name,
        email: email,
        phone: phone
    }

    axios.post(this.url, newContact)
         .then((res) => {
          dispatch({
            type: "ADD_CONTACT",
            payload: res.data 
              //id: size + 1,
              
              
            
          })
         })

   
    this.cleanForm()

    this.props.history.push('/');



  }
  
  render() {

    const { name, email, phone, errors } = this.state;


    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div>
              <form onSubmit={this.Submit.bind(this, dispatch, value.contacts.length)}>
                <div className="card">
                  <div className="card-body">
                    <h3 className="text-center">ADD NEW CONTACT</h3>
                    <InputHelper
                      label="NAME"
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={this.onChangeInput}
                      error={errors.name}
                    />
                    <InputHelper
                      label="EMAIL"
                      type="text"
                      name="email"
                      id="email"
                      value={email}
                      onChange={this.onChangeInput}
                      error={errors.email}
                    />
                    <InputHelper
                      label="PHONE"
                      type="text"
                      name="phone"
                      id="phonw"
                      value={phone}
                      onChange={this.onChangeInput}
                      error={errors.phone}
                    />
                    <button type="submit" className="form-control btn btn-success mt-2">ADD CONTACT</button>
                  </div>

                </div>
              </form>
            </div>
          )
        }}
      </Consumer>

    )
  }
}
