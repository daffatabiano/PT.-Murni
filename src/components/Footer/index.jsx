import { useMemo } from 'react';
import { Logo } from '../Header';
import SubFooter from './SubFooter';
import { footerLists, iconMap, listSocmed } from '../../utils/constants';
import { Link } from 'react-router-dom';

export default function Footer () {
    const listSocialMedia = useMemo(() => {
            return (
                <ul className="sm:flex gap-2 items-center text-white hidden">
                    {listSocmed.map((item, i) => (
                        <li key={i}>
                            <Link to={item.link}>{iconMap[item.icon]}</Link>
                        </li>
                    ))}
                </ul>
            )
        }, [listSocmed])

    return (
        <footer className="bg-primary">
            <div className="container pt-18 pb-14 flex sm:flex-row flex-col gap-6 ">
                <div className="flex flex-col gap-6 w-full text-white">
                    <Logo />
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. </p>
                    
                    {listSocialMedia}
                </div>
                <div className='gap-8 sm:flex hidden w-full justify-between'>
                    {footerLists.map((item, i) => (
                        <div key={i} className='flex-col text-white'>
                            <h1  className='font-bold text-lg pb-4'>{item.title}</h1>
                            <ul className='flex flex-col flex-wrap gap-2 sm:inline-block hidden'>
                                {item.children.map((item) => (
                                    <li key={item}> {">"} {item} </li>
                                ))}
                            </ul>
                        </div>
                    ) )}
                </div>
                <div className='flex gap-4 sm:hidden flex w-full justify-between'>
                    {footerLists.slice(0,2).map((item, i) => (
                        <div key={i} className='flex-col text-white'>
                            <h1  className='font-bold text-lg pb-4'>{item.title}</h1>
                            <ul className='flex flex-col flex-wrap gap-2'>
                                {item.children.map((item) => (
                                    <li key={item}> {">"} {item} </li>
                                ))}
                            </ul>
                        </div>
                    ) )}
                </div>  
            </div>
            <SubFooter />
        </footer>
    )
}