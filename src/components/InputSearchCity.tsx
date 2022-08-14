import { useEffect, useState } from "react"
import { useDebounce } from "../hooks/debounce"
import { useSearchCityQuery } from "../store/api/weather.api"

export const InputSearchCity = () => {

    const [searchCity, setSearchCity] = useState('Moscow')

    // const [dropdown, setDropdown] = useState<Boolean>(false)

    // custom hooks
    const debounced = useDebounce(searchCity)

    const { isLoading, isError, data} = useSearchCityQuery(debounced, {
        skip: debounced.length < 2,
        // обновление данных при фокусе на страницу
        // refetchOnFocus: true
    })

    


    return (
        <div className="input-header">
            <input
                className='border py-2 px-4 w-full h-[42px] mb-2 focus:outline-none'
                type="text"
                placeholder="Введите свой город"
                value={searchCity}
                onChange={(event) => setSearchCity(event.target.value)}
            />
            {isLoading && <h2>Идет загрузка</h2>}
            {data?.map((weather : any) => (
            <span
              key={weather.id}
              className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
            >
              {weather.weather.id}
              {weather}
            </span>
          ))}


        </div>
    )
}