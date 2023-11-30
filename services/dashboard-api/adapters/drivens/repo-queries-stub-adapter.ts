import { User as RepoUser } from "../../../repository/app/schemas/user";
import { ForRepoQuerying } from "../../ports/drivens";

const userMock: RepoUser = {
    id: '123123123',
    name: 'Jhon Doe',
    email: 'John@gmail.com'
}

export class RepoQueriesStub implements ForRepoQuerying{
    getUser(_email: string): Promise<RepoUser> {
        return Promise.resolve(userMock)
    }
    createUser(_user: any, _password: string): Promise<RepoUser> {
        return Promise.resolve(userMock)
    }
    
}