/**
 * Interface for processed login response
 */
export interface ILoginResponse {
    /**
     * status of response, if true auth is ok
     */
    status: boolean;

    /**
     * optional, if there was auth error it will be here
     */
    error?: Error;
}
