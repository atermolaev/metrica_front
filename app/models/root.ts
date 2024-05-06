export interface IRootState {
    authReducer: {
        login: string,
        pass: string,
    };
    page1Reducer: {
        cource: Record<string, string>,
    };
    page2Reducer: {
        cource: Record<string, string>,
    };
}