import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, EMPTY, Observable, of, throwError } from "rxjs";
import { switchMap, tap, map, catchError } from "rxjs/operators";

import { API_URL, storageKey } from "../../constants/index";
import { IAuthResponse, ILoginResponse, IUser, IUserLogin } from "../../models/index";

@Injectable()
export class AuthService {

    private $isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private http: HttpClient;
    // tslint:disable-next-line:variable-name
    private _authToken: string;

    public set authToken(token: string) {
        this._authToken = token;
    }

    public get authToken(): string {
        return this._authToken;
    }


    constructor(http: HttpClient) {
        this.http = http;
    }

    /**
     * returns an observable that is responsible for emitting current auth status
     */
    public getAuthStatus(): Observable<boolean> {
        return this.$isAuthenticated.asObservable();
    }

    /**
     * function sets user data to localStorage
     */
    public login(user: IUserLogin): Observable<ILoginResponse> {

        return this.http.post(`${API_URL}/auth/login`, user).pipe(
            tap((data: IAuthResponse) => {
                const { token } = data;
                this.authToken = token;
                this.$isAuthenticated.next(true);
                // TODO: create a separate api call to /auth/userinfo to fetch actual user data
                localStorage.setItem(storageKey, JSON.stringify(user));
            }),
            map(() => ({
                status: true
            })),
            catchError((err) => throwError({ status: false, error: err} ))
        );
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
