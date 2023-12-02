import { ExternalUser } from "../../../repository/app/schemas"
import { User } from "../../app/shemas"


export interface ForRepoQuerying {
    getUser(email: string): Promise<ExternalUser>
    createUser(user: User): Promise<ExternalUser>
}