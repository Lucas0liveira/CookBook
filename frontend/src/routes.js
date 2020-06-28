import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import SubmitRecipe from './pages/SubmitRecipe'
import Template from './pages/Template'
import Login from './pages/Login'
import Register from './pages/Register'
import ViewRecipe from './pages/ViewRecipe'
import Profile from './pages/Profile'
import ProfileFolder from './pages/ProfileFolder'
import ProfileSubmited from './pages/ProfileSubmited'
import SearchResults from './pages/SearchResults'
import EditRecipe from './pages/EditRecipe'

//switch garante que apenas uma rota sera chamada por momento
//exact faz com que entre no rota só se for exatamente essa a url
//...assim uma rota que começa com o mesmo texto não será ignorada.
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/recipe/submit" component={SubmitRecipe}></Route>
                <Route path="/template" component={Template}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/recipe/:id" component={ViewRecipe}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/folder/:id" component={ProfileFolder}></Route>
                <Route path="/profilesubmited" component={ProfileSubmited}></Route>
                <Route path="/searchresults" component={SearchResults}></Route>
                <Route path="/edit/:id" component={EditRecipe}></Route>
            </Switch>
        </BrowserRouter>
    )
}