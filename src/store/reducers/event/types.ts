import {UserInterface} from "../../../models/UserInterface";
import {EventInterface} from "../../../models/EventInterface";

export interface EventState {
    guests: UserInterface[]
    events: EventInterface[]
}

export enum EventActionsEnum {
    SET_GUESTS ="SET_GUESTS",
    SET_EVENTS ="SET_EVENTS"
}

export interface setGuestsAction {
    type: EventActionsEnum.SET_GUESTS,
    payload: UserInterface[]
}

export interface setEventsAction {
    type: EventActionsEnum.SET_EVENTS,
    payload: EventInterface[]
}

export type EventAction =
    setGuestsAction |
    setEventsAction
