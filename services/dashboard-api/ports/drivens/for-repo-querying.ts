import { User as RepoUser } from "../../../repository/app/schemas"
import { User } from "../../app/shemas"


export interface ForRepoQuerying {
    getUser(email: string): Promise<RepoUser>
    createUser(user: User, password: string): Promise<RepoUser>
}