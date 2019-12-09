import { IName } from "./name.interface";

/**
 * This interface is describing a User model
 * id: user's id, number
 * login: user's login, string
 * password: user's password, string
 */

export interface IUser {
    id: number;
    token: string;
    name: IName;
    login: string;
    password: string;
}

