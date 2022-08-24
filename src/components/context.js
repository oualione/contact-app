import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();
const reducer = (state,action) => {
    switch(action.type){
        case  'DELETE_CONTACT' :
            return {
               contacts : state.contacts.filter((contact) => contact.id !== action.payload)
            }
            case  'ADD_CONTACT' :
                return {
                   contacts : [action.payload, ...state.contacts]
                }
                case  'UPDATE_CONTACT' :
                    return {
                    contacts : state.contacts.map((contact) => contact.id === action.payload.id ? contact = action.payload : contact)
                }
        default :
        return state;
        
    }
}



export class Provider extends Component {

     url = "https://jsonplaceholder.typicode.com/users"

    state = {
        contacts : [
            // {id : 1,name : "Khalid Ouali",phone : "+14076272476", email : "ouali.linux@gmail.com"},
            // {id : 2,name : "Jennifer Cely",phone : "+15036512475", email : "jenny.cely@gmail.com"},
            // {id : 3,name : "Raiana Ollier",phone : "+19075412547", email : "raiana.ollier@gmail.com"}
        ],
        dispatch : action => this.setState(state => reducer(state,action))
  }
//   componentDidMount() {
//       axios.get(this.url)
//       .then((res) => 
//       this.setState({ contacts : res.data}))
//       .catch((err) => console.error(err))
//   }

    async componentDidMount(){
        const res = await axios.get(this.url)
        this.setState({
            contacts : res.data
        })
    }
    render() {
    return (
      
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
      
    )
  }
  
}

export const Consumer = Context.Consumer;
