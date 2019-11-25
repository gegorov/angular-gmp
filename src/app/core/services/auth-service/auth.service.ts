import { Injectable } from "@angular/core";
import { BehaviorSubject, EMPTY, Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

import { storageKey } from "../../constants/index";
import { IUser } from "../../models/index";

@Injectable()
export class AuthService {

    private $isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    /**
     * returns an observable that is responsible for emitting current auth status
     */
    public getAuthStatus(): Observable<boolean> {
        return this.$isAuthenticated.asObservable();
    }

    /**
     * function sets user data to localStorage
     */
    public login(user: IUser): void {
        this.$isAuthenticated.next(true);
        localStorage.setItem(storageKey, JSON.stringify(user));
    }

    /**
     * function clears user data from local storage
     */
    public logout(): void {
        this.$isAuthenticated.next(false);
        this.clearLocalStorage();
    }

    /**
     * function returns user login fro local storage
     */
    public getUserInfo(): Observable<string> {
        return this.$isAuthenticated.pipe(
            switchMap((value) => value ? of(this.getUserLoginFromLocalStorage()) : EMPTY)
        );
    }

    /**
     * function that clears localstorage
     */
    public clearLocalStorage(): void {
        localStorage.removeItem(storageKey);
    }

    private getUserLoginFromLocalStorage(): string {
        const user: IUser = JSON.parse(localStorage.getItem(storageKey));
        return user.login;
    }
}
