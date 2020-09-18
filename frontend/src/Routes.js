import React from 'react'
import { BrowserRouter, Switch , Route} from 'react-router-dom'

import Homepage from './core/Homepage'
import Signin from './user/Signin'
import Signup from './user/Signup'
import AdminRoute from './auth/AdminRoute'
import PrivateRoute from './auth/PrivateRoute'
import UserDB from './user/UserDB'
import AdminDB from './user/AdminDB' 


const Routes = () => {
    return (
        <div>
            <BrowserRouter>
             <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/signin" exact component={Signin} />
              <PrivateRoute path="/user/dashboard" exact component={UserDB} />
              <AdminRoute path="/admin/dashboard" exact component={AdminDB} />
              </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes
