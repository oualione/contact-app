import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Consumer} from '../context'
import axios from 'axios';
import { Link } from 'react-router-dom';


class Contact extends Component {


  url = "https://jsonplaceholder.typicode.com/users/"

  state = {
    ToggleButton : true
  }

  showContact (message) {
    console.log("Hello : " + message)
    this.setState({
      ToggleButton : !this.state.ToggleButton
    })
  }

  OnDeleteClick = (id,dispatch) => {
    // console.log("Button clicked !")
    // this.props.DeleteContact()

    axios.delete(this.url+id)
         .then((res) => dispatch({
      type : 'DELETE_CONTACT',
      payload : id
   
      })).catch((err) => console.error(err))

      
    
  }  

  

 
  render() {
    const {id, name, email, phone} = this.props.data
    
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;

          return (
            <div>
          <div className="card">
            <img className="card-img-top" src="holder.js/100x180/" alt=""/>
            <div className="card-body">
            
              <h4 className="card-title">

               {name.toUpperCase()}
               <i style={{color :'red', cursor : 'pointer'}} onClick={this.OnDeleteClick.bind(this,id,dispatch)} className="fa fa-trash pull-right"></i>
               <Link to={`contact/edit/${id}`}>
               <i style={{color :'orange', cursor : 'pointer'}} className="fa fa-pencil pull-right"></i>
               </Link>
              <i onClick={this.showContact.bind(this,name)}className="fa fa-arrow-circle-down"></i>  
              </h4>
              <div className="card-text">
                { (this.state.ToggleButton) ? (
                  <ul className="list-group">
                  <li className="list-group-item ">{phone}</li>
                  <li className="list-group-item">{email}</li>
                </ul>

                ) : null}
                
              </div>
            </div>
          </div>
      </div>
          )
  }}
      </Consumer>
    )
  }
}

Contact.defaultProps = {
  name : "Hassan Ali",
  phone : "4076272476" ,
  email : "myemail@mail.com"
}

Contact.propTypes = {
  name : PropTypes.string.isRequired,
  phone : PropTypes.string.isRequired,
  email : PropTypes.string.isRequired,

}


export default Contact
