
import { Link } from "react-router-dom"
import logo from "../icons/logo.svg"
import { InputSearchCity } from "./InputSearchCity"


export const Header = () => {
    return (
        <header className='flex py-[20px] justify-between items-center'>
            <div className="header-logo flex items-center gap-2 text-[24px]">
                <img src={logo} alt="" />
                <span>Weather</span>
            </div>
            <div className="header-input ">
                <InputSearchCity />
            </div>

            <div className="header-link flex gap-10">
                <Link to='/'>
                    Прогноз на 3 дня
                </Link>
                <Link to='/'>
                    Прогноз на 5 дней
                </Link>
            </div>
        </header>
    )
}