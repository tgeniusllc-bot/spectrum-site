import React from "react";
import { AiOutlineDribbble } from "react-icons/ai";
import {
    FaDiscord,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaSnapchat,
    FaSpotify,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

const icons = [
    {
        id: 1,
        name: "facebook",
        icon: (
            <FaFacebook
                key={1}
                className="h-5 w-5 hover:text-facebook transition duration-300 ease-in"
            />
        ),
    },
    {
        id: 2,
        name: "instagram",
        icon: (
            <FaInstagram
                key={2}
                className="h-5 w-5 hover:text-instagram transition duration-300 ease-in"
            />
        ),
    },
    {
        id: 3,
        name: "twitter",
        icon: (
            <FaTwitter
                key={3}
                className="h-5 w-5 hover:text-twitter transition duration-300 ease-in"
            />
        ),
    },
    {
        id: 4,
        name: "github",
        icon: (
            <FaGithub
                key={4}
                className="h-5 w-5 hover:text-github transition duration-300 ease-in"
            />
        ),
    },
    {
        id: 5,
        name: "dribbble",
        icon: (
            <AiOutlineDribbble
                key={5}
                className="h-5 w-5 hover:text-dribbble transition duration-300 ease-in"
            />
        ),
    },
    {
        id: 6,
        name: "linkedin",
        icon: (
            <FaLinkedin
                key={6}
                className="h-5 w-5 hover:text-linkedin transition duration-300 ease-in"
            />
        ),
    },
    {
        id: 7,
        name: "discord",
        icon: (
            <FaDiscord
                key={7}
                className="h-5 w-5 hover:text-discord transition duration-300 ease-in"
            />
        ),
    },
    {
        id: 8,
        name: "spotify",
        icon: (
            <FaSpotify
                key={8}
                className="h-5 w-5 hover:text-spotify transition duration-300 ease-in"
            />
        ),
    },
    {
        id: 9,
        name: "snapchat",
        icon: (
            <FaSnapchat
                key={9}
                className="h-5 w-5 hover:text-snapchat transition duration-300 ease-in"
            />
        ),
    },
    {
        id: 10,
        name: "youtube",
        icon: (
            <FaYoutube
                key={10}
                className="h-5 w-5 hover:text-youtube transition duration-300 ease-in"
            />
        ),
    },
];

export default function SocialIcons({ logos }: { logos: any }) {
    const titleString = logos.title.toLowerCase();
    const found = icons
        .filter((item) => titleString.includes(item.name))
        .map((item) => item.icon);

    return (
        <a
            href={logos.href}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 mx-5"
        >
            {found}
        </a>
    );
}
