import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";


import { API_URL, storageKey } from "../../constants/index";
import { IAuthResponse, IUser, IUserLogin } from "../../models/index";

@Injectable()
export class AuthService {
    private $isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    /**
     * function sets user data to localStorage
     */
    public login(user: IUserLogin): Observable<IAuthResponse> {
        return this.http.post<IAuthResponse>(`${API_URL}/auth/login`, user);
    }

    /**
     * function that sets token to localstorage
     */
    public setAuthToken(token: string): void {
        if (token) {
            localStorage.setItem(storageKey, token);
        } else {
            this.clearLocalStorage();
        }
    }

    /**
     * Function that fetches User info from backend
     */
    public getUserInfo(token: string): Observable<IUser> {
        return this.http.post<IUser>(`${API_URL}/auth/userinfo`, { token });
    }

    /**
     * function that returns token from localstorage
     */
    public getAuthToken(): string {
        return localStorage.getItem(storageKey);
    }

    /**
     * function that clears localstorage
     */
    public clearLocalStorage(): void {
        localStorage.removeItem(storageKey);
    }

}
