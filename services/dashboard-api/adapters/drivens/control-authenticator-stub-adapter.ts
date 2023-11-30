import { AuthDetails, Permissions } from "../../app/shemas"
import { ForControlAuthenticating } from "../../ports/drivens"

const authDetailsMock: AuthDetails = {
    token: '1234vsdsfdsf987',
    refreshToken: '12321cascmmczc'
}

const permissionsMock: Permissions = {
    admin: true,
    user: true
}

export class ControlAuthenticatorStub implements ForControlAuthenticating {
    getAuthDetails(_email: string, _password: string): Promise<AuthDetails> {
        return Promise.resolve(authDetailsMock)
    }
    getPermissions(_email: string, _password: string): Promise<Permissions> {
        return Promise.resolve(permissionsMock)
    }

}