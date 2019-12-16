import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class LoadingService {
    // tslint:disable-next-line:variable-name
    private _loading: boolean = false;

    get loading(): boolean {
        return this._loading;
    }

    set loading(value: boolean) {
        this._loading = value;
        this.isLoading.next(value);
    }

    /**
     * Behaviour subject that is used to keep loader status
     */
    public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this._loading);

    /**
     * method that sets true to loader when we need to start showing loader
     */
    public startLoading() {
        this.loading = true;
    }

    /**
     * method that sets false to loader when we need to stop showing loader
     */
    public stopLoading() {
        this.loading = false;
    }


}
