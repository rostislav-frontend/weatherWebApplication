
import { Link } from "react-router-dom"
import logo from "../icons/logo.svg"
import { InputSearchCity } from "./InputSearchCity"

export const Header = () => {
    return (
        <header className='flex py-[20px] justify-between items-center'>
            <Link to={'/'}>
            <div className="header-logo flex items-center gap-2 text-[24px]">
                <img src={logo} alt="Logo" />
                <span>Weather</span>
            </div>
            </Link>
            <div className="header-input ">
                <InputSearchCity />
            </div>

            <div className="header-link flex gap-10">
                <Link to='/'>
                    Текущая погода
                </Link>
                <Link to='/weatherThreeDays'>
                    Прогноз на 3 дня
                </Link>
                <Link to='/weatherFiveDays'>
                    Прогноз на 5 дней
                </Link>
            </div>
        </header>
    )
}