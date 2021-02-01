import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroeScreen } from '../components/heroes/HeroeScreen'
import { Marvel } from '../components/marvel/Marvel'
import { SeacrhScreen } from '../components/search/SeacrhScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path='/marvel' component={Marvel}/>
                    <Route exact path='/hero/:heroeId' component={HeroeScreen}/>
                    <Route exact path='/dc' component={DcScreen}/>
                    <Route exact path='/search' component={SeacrhScreen}/>
                    <Redirect to="marvel" />
                </Switch>
            </div>
        </>
    )
}
