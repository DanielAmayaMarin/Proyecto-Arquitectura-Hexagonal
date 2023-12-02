import { initTRPC } from "@trpc/server"
import { ControlAuthenticatorStub, RepoQueriesStub } from "../adapters/drivens"
import { AuthenticatorProxyAdapter } from "../adapters/drivers/authenticator-proxy-adapter"
import { DashbordApi } from "./dashboard-api"
import { authTRPCAdapter } from "../adapters/drivers"

const CompositionMock = () => {

    // DRIVENS
    const controlAuthenticatorStub = new ControlAuthenticatorStub()
    const repoQueriesStub = new RepoQueriesStub()

    // APP
    const dashboardApiMock = new DashbordApi(controlAuthenticatorStub, repoQueriesStub)

    // DRIVERS
    const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(dashboardApiMock)


    return { authenticatorProxyAdapter }
}

export const { authenticatorProxyAdapter } = CompositionMock()

export const localTRPCCompose = () => {
    // DRIVENS
    const controlAuthenticatorStub = new ControlAuthenticatorStub()
    const repoQueriesStub = new RepoQueriesStub()

    // APP
    const dashboardApiMock = new DashbordApi(controlAuthenticatorStub, repoQueriesStub)

    // TRPC INSTANCE
    const t = initTRPC.create()

    // TRPC DRIVER
    const authTRPCAdapterRouter = authTRPCAdapter(dashboardApiMock, t)

    const appRouter = t.mergeRouters(authTRPCAdapterRouter)

   return {appRouter}
}