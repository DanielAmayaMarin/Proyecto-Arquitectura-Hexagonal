import { LoggerStubAdapter } from "../adapters/drivens"
import { UserManagerProxy } from "../adapters/drivers"
import { Repository } from "./repository"

export const compositionMock = () => {
    const monitorStub = new LoggerStubAdapter()
    const repositoryMock = new Repository(monitorStub)

    const userManagerProxy = new UserManagerProxy(repositoryMock)

    return {
        userManagerProxy
    }
}

export const { userManagerProxy } = compositionMock()

const registerMock = {
    name: "Samuelcito",
    email: "samu@gmail.com",
    password: "123456789"
}

userManagerProxy.getUser("john@gmail.com")
userManagerProxy.createUser(registerMock)