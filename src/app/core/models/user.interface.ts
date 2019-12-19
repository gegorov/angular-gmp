import { IName } from "./name.interface";

/**
 * This interface is describing a User model
 * login: user's login, string
 * password: user's password, string
 */

export interface IUser {
    /**
     * user's id, number
     */
    id: number;

    /**
     * secret token
     */
    token: string;

    /**
     * user name is an instance of IName
     */
    name: IName;

    /**
     *  user's login
     */
    login: string;

    /**
     * user password
     */
    password: string;
}

