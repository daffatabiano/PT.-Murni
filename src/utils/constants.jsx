import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGoogle, FaTwitter, FaFacebook, FaStar, FaWifi, FaSwimmingPool, FaTv  } from "react-icons/fa";
import { IoIosSnow } from "react-icons/io";
import { PiMapPinAreaFill } from "react-icons/pi";


export const footerLists = [
    {
        title: "Company",
        children: ["123 Avenue, New York", "+(1600) 456 7890", "yourid@example.com", "9:00 AM - 7:00 PM", "@officialpage"]
    },
    {
        title : "Features",
        children: ["Home", "About", "Provide", "Benefits", "Contact"]
    },
    {
        title : "Help Center",
        children : ["Call Center", "Official Page", "Frequently Asked Question", "History Background", "Newsletter Subscription"]
    }
]

export const subHeaderLists = [
    {
        icon: "phone",
        content: "+(1600) 456 7890"
    },
    {
        icon : "mail",
        content: "yourid@example.com"
    },
    {
        icon : "location",
        content : "123 Fifth Avenue, New York - 1060, USA."
    }
];
export const listSocmed = [
    {
        icon : "google" ,
        link : "https://google.com"
    },
    {
        icon : "facebook" ,
        link : "https://facebook.com"
    },
    {
        icon : "twitter" ,
        link : "https://twitter.com"
    },
    {
        icon : "linkedin" ,
        link : "https://linkedin.com"
    }
];

export const listCards = [{
        icon: "snow",
        title: "Air Conditioned"
    },{
        icon: "wifi",
        title: "Free WiFi"
    },
    {
        icon : "pool",
        title: "Swimming Pool"
    },
    {
        icon : "tv",
        title: "Television"
    }
]
   

export const iconMap = {
    phone : <FaPhone />,
    mail : <FaEnvelope />,
    location : <FaMapMarkerAlt/>,
    google : <FaGoogle />,
    facebook : <FaFacebook />,
    twitter: <FaTwitter />,
    linkedin : <FaLinkedin />,
    pinned : <PiMapPinAreaFill />,
    star : <FaStar />,
    snow : <IoIosSnow />,
    wifi : <FaWifi />,
    pool : <FaSwimmingPool />,
    tv: <FaTv />
};