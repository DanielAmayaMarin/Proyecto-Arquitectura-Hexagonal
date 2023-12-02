import { describe, it, expect } from 'vitest'
import { LoggerStubAdapter } from '../adapters/drivens'
import { Repository } from './repository'


describe("Repositiry", () => {

    const monitorStub = new LoggerStubAdapter()
    const repositoryMock = new Repository(monitorStub)


    it.concurrent("debería controlar que el usuario no existe", async () => {
        //GIVEN
        const mockedEmail = "samuelcito@gmail.com"

        const expectedResult = {
            id: "1",
            name: "Samuel",
            email: "samuelcito@gmail.com"
        }

        //WHEN
        let resul;
        try {
            resul = await repositoryMock.getUser(mockedEmail)
        } catch (error) { }

        //THEN
        expect(resul).not.toEqual(expectedResult)
    })

    it.concurrent("debería crear un nuevo usuario", async () => {
        //GIVEN
        const mockedUser = {
            name: "Samuel",
            email: "samuelcito@gmail.com",
            password: "password"
        }

        const expectedResult = {
            id: '1',
            name: "Samuel",
            email: "samuelcito@gmail.com",
        }

        //WHEN
        let resul;
        try {
            resul = await repositoryMock.createUser(mockedUser)
        } catch (error) { }

        //THEN
        expect(resul).toEqual(expectedResult)
    })

    it.concurrent("debería controlar que el usuario ya existe", async () => {
        //GIVEN
        const mockedUser = {
            name: "Samuel",
            email: "samuelcito@gmail.com",
            password: "password"
        }

        const expectedResult = {
            id: '1',
            ...mockedUser
        }

        //WHEN
        let resul;
        try {
            resul = await repositoryMock.createUser(mockedUser)
        } catch (error) { }

        //THEN
        expect(resul).not.toEqual(expectedResult)
    })

    it.concurrent("debería obtener un usuario", async () => {
        //GIVEN
        const mockedEmail = "samuelcito@gmail.com"

        const expectedResoult = {
            id: '1',
            name: 'Samuel',
            email: 'samuelcito@gmail.com'
        }

        //WHEN
        let result
        try {
            result = await repositoryMock.getUser(mockedEmail)
        } catch (error) {
            
        }

        //THEN
        expect(result).toEqual(expectedResoult)
    })


})