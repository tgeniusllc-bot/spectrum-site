import React, { TextareaHTMLAttributes } from "react";
import cn from "classnames";
import { useTranslation } from "next-i18next";

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    inputClassName?: string;
    labelKey?: string;
    name: string;
    placeholderKey?: string;
    errorKey?: string;
    shadow?: boolean;
    variant?: "normal" | "solid" | "outline";
    validation: any;
}

const variantClasses = {
    normal: "bg-theme-input border border-zinc-900/10 dark:border-white/10 focus:shadow focus:outline-none focus:text-black dark:focus:text-black text-black dark:text-gray-900 placeholder-body",
    solid: "bg-gray-100 border border-zinc-900/10 dark:border-white/10 focus:bg-white dark:bg-zinc-900 focus:border-primary",
    outline:
        "border border-zinc-900/10 dark:border-white/10 focus:border-primary",
};

const TextArea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
    const { t } = useTranslation();
    const {
        className,
        labelKey,
        name,
        placeholderKey,
        errorKey,
        variant = "normal",
        shadow = false,
        inputClassName,
        validation,
        ...rest
    } = props;
    return (
        <div className={className}>
            {labelKey && (
                <label
                    htmlFor={name}
                    className="block theme-text-heading font-semibold text-sm leading-none mb-3"
                >
                    {t(labelKey)}
                </label>
            )}
            <textarea
                id={name}
                name={name}
                className={cn(
                    "px-4 py-3 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0",
                    shadow && "focus:shadow",
                    variantClasses[variant],
                    inputClassName
                )}
                autoComplete="off"
                spellCheck="false"
                rows={4}
                ref={ref}
                // @ts-ignore
                placeholder={t(placeholderKey)}
                {...rest}
            />
            {<p className="my-2 text-xs text-red-500">{validation}</p>}
        </div>
    );
});

export default TextArea;
