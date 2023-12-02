import { AuthenticatedUserSchema, RegisterSchema } from '../../app';
import { DashbordApi } from './../../app/dashboard-api';
import {initTRPC} from '@trpc/server'

export function authTRPCAdapter(dashbordApi: DashbordApi, t: ReturnType<typeof initTRPC.create>){
    return t.router({
        login: t.procedure
        .input(RegisterSchema.pick({email: true, password: true}))
        .output(AuthenticatedUserSchema)
        .mutation(({input}) => dashbordApi.login(input.email, input.password)),
        
        register: t.procedure
        .input(RegisterSchema)
        .output(AuthenticatedUserSchema)
        .mutation(({input}) => dashbordApi.register(input))
    })
}