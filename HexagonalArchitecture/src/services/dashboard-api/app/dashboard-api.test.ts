import { describe, it, expect } from 'vitest'
import { ControlAuthenticatorStub, RepoQueriesStub } from '../adapters/drivens'
import { DashbordApi } from './dashboard-api'
import { AuthenticatedUser, User } from './shemas'

describe("DashboardApi", () => {

    const controlAuthenticatorStub = new ControlAuthenticatorStub()
    const repoQueriesStub = new RepoQueriesStub()
    const dashboardApiMock = new DashbordApi(controlAuthenticatorStub, repoQueriesStub)

    it.concurrent("should login", async () => {
        //GIVEN
        const mockedParams = {
            email: "john@gmail.com",
            password: "123456789"
        }

        const expectedResult: AuthenticatedUser = {
            id: "1",
            name: "Jhon Doe",
            email: "John@gmail.com",
            token: "token",
            refreshToken: "refreshToken",
            permissions: {
                admin: true,
                user: true
            }
        }

        //WHEN
        const result = await dashboardApiMock.login(mockedParams.email, mockedParams.password)

        //THEN
        expect(result).toEqual(expectedResult)
    })

    it.concurrent("should register", async () => {
         //GIVEN
         const mockedUser: User = {
            email:"John@gmail.com",
            name:"Jhon Doe"
        }

        const password = "1234567"

        const expectedResult: AuthenticatedUser = {
            id: "1",
            name: "Jhon Doe",
            email: "John@gmail.com",
            token: "token",
            refreshToken: "refreshToken",
            permissions: {
                admin: true,
                user: true
            }
        }

         //WHEN
         const result = await dashboardApiMock.register(mockedUser, password)

            //THEN
        expect(result).toEqual(expectedResult)


    })
})