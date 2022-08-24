import React, { Component } from 'react'
import axios from 'axios'
import { Consumer } from '../context'
import InputHelper from '../helpers/InputHelper'

export default class EditContact extends Component {
    state = {
        id: '',
        name: '',
        email: '',
        phone: '',
        errors: {}
      }
      url = "https://jsonplaceholder.typicode.com/users/"
      async componentDidMount(){
        const id = this.props.match.params.id;
        const res = await axios.get(this.url+id)
       this.setState({
            name : res.data.name,
            email : res.data.email,
            phone : res.data.phone
       })
      }
    
      
    
    
      onChangeInput = (e) => {
        this.setState({
          [e.target.name]: e.target.value
    
        })
      }
    
      cleanForm() {
        this.setState({
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
    
        const updatedContact = {
            name: name,
            email: email,
            phone: phone
        }
        const id = this.props.match.params.id;
        try{
          axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedContact)
             .then((res) => {
              dispatch({
                type: "UPDATE_CONTACT",
                payload: res.data 
                  //id: size + 1,
                  
                  
                
              })
             })
        }catch(e){
          console.error(e)
        }
        
    
       
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
                        <h3 className="text-center">EDIT CONTACT</h3>
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
                        <button type="submit" className="form-control btn btn-outline-warning mt-2">UPDATE CONTACT</button>
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
