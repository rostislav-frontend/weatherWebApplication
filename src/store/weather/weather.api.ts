
import { createApi, fetchBaseQuery }  from '@reduxjs/toolkit/query/react'
import { IWeather } from './weather.type'

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.openweathermap.org/data/2.5/'
      }),
      
    
    endpoints: build => ({
        
        
        searchCity: build.query<IWeather, string>({
            query: (search: string) => ({
                url: `weather/`,

                params: {
                    q: search,
                    appid: '3ab1a9998114dafe457fc2c22ae5badd',
                    units: 'metric'
                    // per_page: 10
                }
            }),

        }),
    })
})

// get custom hooks 
export const { useSearchCityQuery } = weatherApi