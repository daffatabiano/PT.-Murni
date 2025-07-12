import SubHeader from "./SubHeader";
import OptimizedImage from "../OptimizedImage";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { routeLists } from "../../routes";
import ButtonIcon from "../Button/ButtonIcon";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
const logo = '/logo.png';

export const Logo = () => (
      <div className="flex sm:gap-4 gap-2 items-center">
        <OptimizedImage src={logo} alt="logo" className="w-6 h-6" />
        <h1 className="font-montserrat italic sm:text-2xl text-lg">Skatcher</h1>
    </div>
)
export default function Header () {

    const SearchBar = () => (
        <>
            <div className="relative w-42 px-4 py-2 bg-white rounded-full sm:flex justify-between hidden">
                <input placeholder="Search Here" className="w-full focus:none bg-transparent focus:border-none text-textGray"/>
                <CiSearch className="text-[#2e67bd] text-2xl font-bold"/>
            </div>
            <ButtonIcon><CiSearch /></ButtonIcon>
        </>
    )

    return (
        <header className="w-full">
            <SubHeader />
            <nav className="backdrop-blur-md bg-primary/90 text-white shadow-md">
                <div className="container py-6 flex justify-between">
                    <Logo />
                    <div className="flex gap-4 items-center ">
                        <div className="">
                            <ul className="sm:flex hidden gap-4 ">
                                {routeLists.map(({name, path}) => (
                                    <li key={name} className="text-lg" >
                                        <Link to={path} >{name}</Link>
                                    </li>
                                ))}
                            </ul>
                            <ButtonIcon><HiOutlineMenuAlt3 /></ButtonIcon>
                        </div>
                        <SearchBar />
                    </div>
                </div>
            </nav>
        </header>
    )
}