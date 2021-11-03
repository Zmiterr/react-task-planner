import React, {FC} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../router";

const AppRouter:FC = () => {
    const auth =true;
    return (
        auth?
        <Switch>
            {privateRoutes.map(r =>
                <Route path={r.path} exact={r.exact} component={r.component} key={r.path}/>
            )}
            <Redirect to={RouteNames.EVENTS}/>
        </Switch>
        :
        <Switch>
            {publicRoutes.map(r =>
                <Route path={r.path} exact={r.exact} component={r.component}  key={r.path}/>
            )}
            <Redirect to={RouteNames.LOGIN}/>
        </Switch>
    );
};

export default AppRouter;
