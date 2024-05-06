export interface IAuthResultData {
    auth: boolean;
    token: string;
}

export interface IAuthResult {
    data: IAuthResultData;
}

export interface IAuthPayload {
    login: string;
    pass: string;
}
