import {FC} from "react";
import Login from "../pages/Login";
import Events from "../pages/Events";

interface routesInterface {
    path: string,
    exact?: boolean,
    component: FC
}

export enum RouteNames {
    LOGIN = '/login',
    EVENTS = '/'
}

export const publicRoutes:routesInterface[] = [
    {path: RouteNames.LOGIN, exact: true, component: Login}
]

export const privateRoutes:routesInterface[] = [
    {path: RouteNames.EVENTS, exact: true, component: Events}
]
