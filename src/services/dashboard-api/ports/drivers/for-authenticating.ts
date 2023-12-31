import { AuthenticatedUser, User } from "../../app/shemas/user"

export interface ForAuthenticating {
    login: (email: string, password:string) => Promise<AuthenticatedUser>
    register: (email: User, password:string) => Promise<AuthenticatedUser>
}