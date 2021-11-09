import axios, {AxiosResponse} from "axios";
import {UserInterface} from "../models/UserInterface";

export default class UserService {
    static async getUsers(): Promise<AxiosResponse<UserInterface[]>> {
        return axios.get<UserInterface[]>('./users.json')
    }
}
