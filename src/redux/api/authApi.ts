import { baseApi } from "./baseApi";



const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: "POST",
                body: data
            })
        })
    })
})

export const { useUserLoginMutation } = authApi