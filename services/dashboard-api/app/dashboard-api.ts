
import { ForControlAuthenticating, ForRepoQuerying } from "../ports/drivens";
import { ForAuthenticating} from "../ports/drivers";
import { AuthenticatedUser, User } from "./shemas";

export class DashbordApi implements ForAuthenticating {
    constructor(private readonly controlAuthenticator: ForControlAuthenticating, private readonly repoQuerier: ForRepoQuerying) { }

    async login(email: string, password: string): Promise<AuthenticatedUser> {
        const authDetails = await this.controlAuthenticator.getAuthDetails(email, password)
        const permissions = await this.controlAuthenticator.getPermissions(email, password)
        const user = await this.repoQuerier.getUser(email)



        console.log("login", {
            ...user,
            ...authDetails,
            ...permissions
        })

        return {
            ...user,
            ...authDetails,
            ...permissions
        }
    }

    async register(user: User, password: string): Promise<AuthenticatedUser> {
        const newUser = await this.repoQuerier.createUser(user, password)
        const authDetails = await this.controlAuthenticator.getAuthDetails(user.email, password)
        const permissions = await this.controlAuthenticator.getPermissions(user.email, password)

        console.log("register", {
            ...user,
            ...authDetails,
            ...permissions
        })

        return {
            ...newUser,
            ...authDetails,
            ...permissions
        }
    }
}