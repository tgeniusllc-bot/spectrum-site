import { ThemeContext } from "@contexts/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeToggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className="focus:outline-none group inline-flex items-end self-center rounded py-1  px-1 text-lg transition duration-300 ease-in  ">
            <div className="inline-flex items-end">
                <div className="group rounded-full transition duration-500 ease-in-out iconColor">
                    {theme === "dark" && (
                        <BsSun
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                            className="group transform cursor-pointer h-5 w-5 transition-all duration-500 ease-in  group-hover:text-accent "
                        />
                    )}
                    {theme === "light" && (
                        <BsMoon
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                            className="group text-theme-heading transform cursor-pointer h-5 w-5  transition-all duration-500 ease-in  group-hover:text-accent "
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ThemeToggle;
