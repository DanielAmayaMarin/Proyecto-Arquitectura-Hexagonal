import { ControlAuthenticatorStub, RepoQueriesStub } from "../adapters/drivens"
import { AuthenticatorProxyAdapter } from "../adapters/drivers/authenticator-proxy-adapter"
import { DashbordApi } from "./dashboard-api"

const CompositionMock = () => {
    const controlAuthenticatorStub = new ControlAuthenticatorStub()
    const repoQueriesStub = new RepoQueriesStub()
    const dashboardApiMock = new DashbordApi(controlAuthenticatorStub, repoQueriesStub)

    const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(dashboardApiMock)
    return {authenticatorProxyAdapter}
}

export const {authenticatorProxyAdapter} = CompositionMock()

const registerMock = {
    name: 'Jhon',
    email: 'jhon@gmail.com',
    password: "password"
}

authenticatorProxyAdapter.login('daniel@gmail.com', '123456')

authenticatorProxyAdapter.register(registerMock)