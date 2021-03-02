import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Header from './header/Header'
import Dashboard from './components/Dashboard'
import AddProject from './components/project/AddProject'
import UpdateProject from './components/project/UpdateProject'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const queryClient = new QueryClient()

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addProject" component={AddProject} />
            <Route exact path="/updateProject/:id" component={UpdateProject} />
          </Switch>
        </QueryClientProvider>
      </div>
    </BrowserRouter>
  )
}

export default App
