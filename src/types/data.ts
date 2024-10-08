export interface ITodo {
    _id: string;
    title: string;
    completed: boolean;
    priority: number;
    updateDate: string;
    addDate: string;
}

export interface IUser {
    email: string;
    password: string;
    token: string;
    refreshToken: string,
    name: string
}