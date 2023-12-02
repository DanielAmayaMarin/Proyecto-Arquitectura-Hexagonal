import {  ExternalUser } from "../../../repository/app/schemas/user";
import { User } from "../../app/shemas";
import { ForRepoQuerying } from "../../ports/drivens";

const userMock: ExternalUser = {
    id: '1',
    name: 'Jhon Doe',
    email: 'John@gmail.com',
}

export class RepoQueriesStub implements ForRepoQuerying{
    getUser(_email: string): Promise<ExternalUser> {
        return Promise.resolve(userMock)
    }
    createUser(_user: User): Promise<ExternalUser> {
        return Promise.resolve(userMock)
    }
    
}