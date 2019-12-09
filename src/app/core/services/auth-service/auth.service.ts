import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, EMPTY, Observable, of, throwError } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";

import { API_URL, storageKey } from "../../constants/index";
import { IAuthResponse, ILoginResponse, IUser, IUserLogin } from "../../models/index";

@Injectable()
export class AuthService {

    private $isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private http: HttpClient;
    // tslint:disable-next-line:variable-name
    private _authToken: string;


    public get authToken(): string {
        return this._authToken;
    }


    constructor(http: HttpClient) {
        this.http = http;
    }

    /**
     * function that checks if there is a token already received from backend
     */
    public isAuthenticated(): boolean {
        return !!this.authToken;
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
                this.setAuthToken(token);
            }),
            switchMap(({ token }) => {
                return this.getUserInfoFromBackend(token);
            }),

            map((data) => {
                console.log("Login data", data);
                localStorage.setItem(storageKey, JSON.stringify(data));
                this.$isAuthenticated.next(true);
                return {
                    status: true
                };
            }),
            catchError((err) => throwError({ status: false, error: err }))
        );
    }

    /**
     * function clears user data from local storage
     */
    public logout(): void {
        this.$isAuthenticated.next(false);
        this.setAuthToken(null);
    }

    /**
     * function returns user login fro local storage
     */
    public getUserInfo(): Observable<string> {
        console.log("inside getUserInfo");
        return this.$isAuthenticated.pipe(
            tap(value => console.log("[value]: ", value)),
            switchMap((value) => value ? of(this.getUserLoginFromLocalStorage()) : EMPTY),
            tap((data) => {
                console.log("userInfo: ", data);
            })
        );
    }

    /**
     * function that clears localstorage
     */
    public clearLocalStorage(): void {
        localStorage.removeItem(storageKey);
    }

    private getUserInfoFromBackend(token: string): Observable<IUser> {
        return this.http.post<IUser>(`${API_URL}/auth/userinfo`, { token });
    }

    private getUserLoginFromLocalStorage(): string {
        const user: IUser = JSON.parse(localStorage.getItem(storageKey));
        console.log("[USER]:", user);
        return `${user.name.first} ${user.name.last}`;
    }

    private setAuthToken(token: string | null) {
        if (token) {
            this._authToken = token;
        } else {
            this.clearLocalStorage();
        }
    }
}
