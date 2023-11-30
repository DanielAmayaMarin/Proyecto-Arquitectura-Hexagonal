import { DashbordApi } from "../../app/dashboard-api";
import { AuthenticatedUser, User } from "../../app/shemas";
import { ForAuthenticating } from "../../ports/drivers";

export class AuthenticatorProxyAdapter implements ForAuthenticating {
    constructor(private readonly dashboardApi: DashbordApi){}
    async login(email: string, password: string): Promise<AuthenticatedUser> {
        return this.dashboardApi.login(email, password)
    }
    async register(user: User, password: string): Promise<AuthenticatedUser>{
        return this.dashboardApi.register(user, password)
    }
}