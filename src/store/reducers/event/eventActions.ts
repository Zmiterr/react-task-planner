import {EventActionsEnum, setEventsAction, setGuestsAction} from "./types";
import {UserInterface} from "../../../models/UserInterface";
import {EventInterface} from "../../../models/EventInterface";
import {AppDispatch} from "../index";
import UserService from "../../../api/UserService";

export const EventActions = {
    setGuests: (payload: UserInterface[]): setGuestsAction => ({type: EventActionsEnum.SET_GUESTS, payload: payload}),
    setEvent: (payload: EventInterface[]): setEventsAction => ({type: EventActionsEnum.SET_EVENTS, payload: payload}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getUsers()
            dispatch(EventActions.setGuests(response.data))
        } catch (error) {
            console.log(error)
        }
    },
    createEvent: (event: EventInterface) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as EventInterface[]
            json.push(event)
            dispatch(EventActions.setEvent(json))
            localStorage.setItem('events', JSON.stringify(json))
        } catch (error) {
            console.log(error)
        }
    },
    fetchEvents: (user: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as EventInterface[]
            const currentUserEvents = json.filter(event => event.author === user || event.guest === user)
            dispatch(EventActions.setEvent(currentUserEvents))
        } catch (error) {
            console.log(error)
        }
    },
}
