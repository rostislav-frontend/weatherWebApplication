import { useState } from "react"
import { useDebounce } from "../hooks/debounce"
import { useSearchCityQuery } from "../store/weather/weather.api"

import iconsSearch from "../icons/magnifyingGlass.svg";

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
        <div className='inputSearch__container'>
            <input
                className='inputSearch__input'
                type="text"
                placeholder="Введите свой город"
                value={searchCity}
                onChange={(event) => setSearchCity(event.target.value)}
            />
            {/* {isLoading && <h2>Идет загрузка</h2>} */}
            <img className='lg:w-[30px] lg:h-[30px]' src={iconsSearch} alt="" />
        </div>


    )
}