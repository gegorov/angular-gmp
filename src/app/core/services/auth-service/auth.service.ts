import { Injectable } from "@angular/core";
import { IUser } from "../../models/index";
import { localStorageFlag } from "../../constants/index";

@Injectable()
export class AuthService {

    private authStatus: boolean;

    /**
     *  to keep Auth status
     */
    public isAuthenticated(): boolean {
        return this.authStatus;
    }
    /**
     * function sets user data to localStorage
     */
    public login(user: IUser): void {
        this.authStatus = true;
        localStorage.setItem(localStorageFlag, JSON.stringify(user));
    }

    /**
     * function clears user data from local storage
     */
    public logout(): void {
        this.authStatus = false;
        localStorage.removeItem(localStorageFlag);
    }

    /**
     * function returns user login fro local storage
     */
    public getUserInfo(): string {
        const user: IUser = JSON.parse(localStorage.getItem(localStorageFlag));
        return user.login;
    }
}
