import React, { Component } from 'react'
import Contact from './Contact'
import {Consumer} from '../context'

class Contacts extends Component {

    // state = {
    //       contacts : [
    //           {id : 1,name : "Khalid Ouali",phone : "+14076272476", email : "ouali.linux@gmail.com"},
    //           {id : 2,name : "Jennifer Cely",phone : "+15036512475", email : "jenny.cely@gmail.com"},
    //           {id : 3,name : "Raiana Ollier",phone : "+19075412547", email : "raiana.ollier@gmail.com"}
    //       ]
    // }
  
 

  DeleteFromList(id){
    const { contacts } = this.state;
    const newListContacts = contacts.filter((contact) => contact.id !== id)
    this.setState({
      contacts : newListContacts
    })
  }

  
   
  render() {

    return (
      <Consumer>
        {value => (
          <div>
          {
              value.contacts.map((contact) => (
                  <Contact key={contact.id} data={contact} DeleteContact={this.DeleteFromList.bind(this,contact.id)}/>
              ))
          }          
        </div>
        )}
      </Consumer>
    )
    // const {contacts} = this.state
    // return (
    //   <div>
    //     {
    //         contacts.map((contact) => (
    //             <Contact key={contact.id} data={contact} DeleteContact={this.DeleteFromList.bind(this,contact.id)}/>
    //         ))
    //     }          
    //   </div>
    // )
  }
}

export default Contacts
