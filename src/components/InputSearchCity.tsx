import { useEffect, useState } from "react"
import { useDebounce } from "../hooks/debounce"
import { useSearchCityQuery } from "../store/weatherApi/weather.api"

export const InputSearchCity = () => {

    const [searchCity, setSearchCity] = useState('Moscow')

    // const [dropdown, setDropdown] = useState<Boolean>(false)

    // custom hooks
    const debounced = useDebounce(searchCity)

    const { isLoading, isError, data } = useSearchCityQuery(debounced, {
        skip: debounced.length < 2,
        // обновление данных при фокусе на страницу
        // refetchOnFocus: true
    })

    console.log(data);



    return (
        <>
            <input
                className='border py-1 px-4  mb-2 focus:outline-none'
                type="text"
                placeholder="Введите свой город"
                value={searchCity}
                onChange={(event) => setSearchCity(event.target.value)}
            />
            {/* {isLoading && <h2>Идет загрузка</h2>} */}

        </>


    )
}