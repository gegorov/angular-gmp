import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


import { API_URL } from "../../constants/index";
import { IAuthResponse, IUser, IUserLogin } from "../../models/index";

@Injectable()
export class AuthService {
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
     * Function that fetches User info from backend
     */
    public getUserInfo(token: string): Observable<IUser> {
        return this.http.post<IUser>(`${API_URL}/auth/userinfo`, { token });
    }
}
