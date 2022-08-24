// import './App.css';
// import Contact from './components/contacts/Contact'
import Navbar from './components/navbar/Navbar'
import AddContact from './components/contacts/AddContact'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Contacts from './components/contacts/Contacts';
import Error404 from './components/Error404';
import { Provider } from './components/context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EditContact from './components/contacts/EditContact';


function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Navbar title="Contacts List" />
          <Switch>
            <Route exact path="/" component={Contacts}/>
            <Route exact path="/contact/add" component={AddContact}/>
            <Route exact path="/contact/edit/:id" component={EditContact}/>
            <Route component={Error404}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
