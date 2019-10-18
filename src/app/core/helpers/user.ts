import { IUser } from "../models/index";

export class User implements IUser {
    public id: number;
    public firstName: string;
    public lastName: string;
}
