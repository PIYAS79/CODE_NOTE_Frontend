import {createApi,fetchBaseQuery,DefinitionType,FetchArgs,BaseQueryApi,BaseQueryFn} from '@reduxjs/toolkit/query/react';

import { RootState } from '../store';
import { removeUser, setUser } from '../features/auth/authSlice';


const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/api/v1',
  credentials: 'include',
  prepareHeaders: (header, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      header.set('authorization', token);
    }
  }
})

const customBaseQuery:BaseQueryFn<FetchArgs,BaseQueryApi,DefinitionType>=async(args,api,extraOptions):Promise<any>=>{
  
  let result = await baseQuery(args,api,extraOptions);
  if(result?.error?.status===401){
    const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token",{
      method:"POST",
      credentials:'include'
    })
    const data = await res.json();
    if(data?.data?.accessToken){
      const user = (api.getState() as RootState).auth.user;
      api.dispatch(setUser({user,token:data.data.accessToken}));
      result = await baseQuery(args,api,extraOptions);
    }else{
      api.dispatch(removeUser())
    }
  }
  return result;
}

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: customBaseQuery,
  tagTypes: ['users'],
  endpoints: () => ({}),
})


export const { } = baseApi;
