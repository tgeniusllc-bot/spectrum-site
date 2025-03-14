import cn from "classnames";
import React, { InputHTMLAttributes } from "react";
import { useTranslation } from "next-i18next";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    inputClassName?: string;
    labelKey?: string;
    placeholderKey?: string;
    name: string;
    errorKey?: string;
    type?: string;
    shadow?: boolean;
    disableBorderRadius?: boolean;
    variant?: "normal" | "solid" | "outline";
    validation: any;
}
const classes = {
    root: "py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out",
    normal: "bg-gray-100 border-zinc-900/10 dark:border-white/10 focus:shadow focus:bg-white focus:border-primary",
    solid: "bg-theme-input border-zinc-900/10 dark:border-white/10 focus:outline-none focus:text-black dark:focus:text-black text-black dark:text-gray-900  h-11 md:h-12",
    outline: "border-zinc-900/10 dark:border-white/10 focus:border-primary",
    shadow: "focus:shadow",
};
const Input = React.forwardRef<HTMLInputElement, Props>(
    (
        {
            className = "block",
            labelKey,
            name,
            errorKey,
            placeholderKey,
            variant = "normal",
            shadow = false,
            type = "text",
            disableBorderRadius = false,
            validation,
            inputClassName,
            ...rest
        },
        ref
    ) => {
        const rootClassName = cn(
            classes.root,
            {
                [classes.normal]: variant === "normal",
                [classes.solid]: variant === "solid",
                [classes.outline]: variant === "outline",
            },
            {
                [classes.shadow]: shadow,
            },
            inputClassName
        );
        const { t } = useTranslation();
        return (
            <div className={className}>
                {labelKey && (
                    <label
                        htmlFor={name}
                        className="block theme-text-heading font-semibold text-sm leading-none mb-3 cursor-pointer"
                    >
                        {t(labelKey)}
                    </label>
                )}
                <input
                    id={name}
                    name={name}
                    type={type}
                    ref={ref}
                    // @ts-ignore
                    placeholder={t(placeholderKey)}
                    className={
                        rootClassName +
                        `${!disableBorderRadius && " rounded-md"}`
                    }
                    autoComplete="off"
                    spellCheck="false"
                    aria-invalid={errorKey ? "true" : "false"}
                    {...rest}
                />
                {<p className="my-2 text-xs text-red-500">{validation}</p>}
            </div>
        );
    }
);

export default Input;
