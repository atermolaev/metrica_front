export interface IAction {
    type: string;
    payload?: any;
    obj?: any;
    error?: any;
}