export interface IAuthResultDataBody {
    auth: boolean;
    token: string;
}

export interface IAuthResultData {
    success: boolean;
    body: IAuthResultDataBody;
}

export interface IAuthResult {
    data: IAuthResultData;
}

export interface IAuthPayload {
    login: string;
    pass: string;
}
