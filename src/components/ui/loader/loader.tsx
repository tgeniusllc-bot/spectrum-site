import styles from "./loader.module.css";
import cn from "classnames";
import { FallingLines } from "react-loader-spinner";

interface Props {
    className?: string;
    text?: string;
    showText?: boolean;
    simple?: boolean;
}

const Loader = (props: Props) => {
    const { className, showText = true, text = "Loading...", simple } = props;
    return (
        <>
            {simple ? (
                <div className={cn(className, styles.simple_loading)} />
            ) : (
                <div
                    className={cn(
                        "w-full flex flex-col items-center justify-center absolute z-100 bg-theme max-h-screen h-screen",
                        className
                    )}
                >
                    <FallingLines color="#f3992e" width="100" visible={true} />

                    {showText && (
                        <h3 className="text-lg font-semibold theme-text-heading italic animate-pulse">
                            {text}
                        </h3>
                    )}
                </div>
            )}
        </>
    );
};

export default Loader;
