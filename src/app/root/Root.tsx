import React, { FunctionComponent } from 'react'
import './Root.scss'

import { Switch, Redirect } from 'react-router-dom'
import { Route } from '../../router/Route'
import { LoginPage, Status404Page, Status500Page, TwoFactorPage } from '../../pages'
// import { AuthContext } from '../../components/auth/context'
import { loading } from '../../snippets/loading'

// import { AuthenticatedApp } from '../authenticated/Authenticated'
import { UnauthenticatedApp } from '../unauthenticated/UnauthenticatedApp'

export type RootProps = {}

export type RootState = {}

export const RootApp: FunctionComponent<RootProps> = (props) => {

    // return (
    //     <AuthContext.Consumer>
    //         { (auth: any) => {
                
                return (
                    <React.Suspense fallback={ loading() } >
                        <Switch>
                            <Route exact path="/2fa" name="Login" render={ (props: any) => <TwoFactorPage {...props}/> } />
                            <Route exact path="/404" name="Page 404" render={ (props: any) => <Status404Page {...props}/> } />
                            <Route exact path="/500" name="Page 404" render={ (props: any) => <Status500Page {...props}/> } />
                            <Route exact path="/login" name="Login" render={ (props: any) => <LoginPage {...props}/> } />
                            {/* <Route path="/" render={ (props: any) => auth?.state?.token ? <AuthenticatedApp {...props}/> : <UnauthenticatedApp {...props}/>} />*/}
                            <Route path="/" render={ (props: any) => <UnauthenticatedApp {...props}/>} />
                            <Redirect from="/admin" to="/"/>
                        </Switch>
                    </React.Suspense>
                )

            // } }
    //     </AuthContext.Consumer>
    // )

}