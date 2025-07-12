import { useMemo } from "react";
import { subHeaderLists, iconMap, listSocmed } from '../../utils/constants';
import { Link } from "react-router-dom";

export default function SubHeader () {
    const listInformation = useMemo(() => {
        return (
            <ul className="flex gap-4 items-center">
                {subHeaderLists.map(({icon, content},i) => (
                    <li key={i} className="flex gap-2 items-center text-white text-[7px] sm:text-base">
                        <i>{iconMap[icon]}</i><p>{content}</p>
                    </li>
                ))}
            </ul>
        )
    },[subHeaderLists])
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
         <div className="bg-primary w-full" aria-label="sub-header">
                <div className="container py-4 flex sm:justify-between justify-center ">
                    {listInformation}
                    {listSocialMedia}
                </div>
            </div>
    )
}