import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App'
import CronogramaTable from '../components/cronogramaTable.js/CronogramaTable'

const AppRoute = () => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={App}
                />
                <Route
                    exact
                    path="/cronograma/:id"
                    component={CronogramaTable}
                />
            </Switch>
        </Router>
    )
}

export default AppRoute
