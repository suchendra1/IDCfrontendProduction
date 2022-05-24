import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Component } from 'react'
import {Helmet} from "react-helmet"
import Cookies from "js-cookie"

import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import NewRecord from './components/NewRecord'
import ShowRecord from './components/ShowRecord'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import LabtechRecord from './components/LabtechRecord'
import showRecords from './components/showRecords'

import './App.css'

class App extends Component {
  state={
    userType:Cookies.get("user_type")
  }
  onLogChange = (userType) => {
    this.setState({userType})
  }
  render(){
  return <div className="container">
    <Helmet>
        <meta charSet="utf-8" />
        <title>SUITS</title>
    </Helmet>
    <BrowserRouter >
      <Header onLogChange={this.onLogChange} userType={this.state.userType}/>
      <div className='all-container'>
        <Switch>
          <ProtectedRoute path="/newrecord" component={NewRecord} />
          <Route exact path="/" component={(props)=><Login onLogChange={this.onLogChange} history={props.history}/>} />
          <Route path="/register" component={Register} />
          <ProtectedRoute path="/showrecord" component={ShowRecord} /> 
          <ProtectedRoute path="/labtechrecord" component={LabtechRecord}/>
          <ProtectedRoute path="/showrecords" component={showRecords}/>
          <Route component={NotFound} />
        </Switch>
      </div>
      
    </BrowserRouter>
  </div>
  }
}

export default App