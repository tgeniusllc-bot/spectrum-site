import { ReactNode } from "react";

type FormWrapperProps = {
    children: ReactNode;
};

export function FormWrapper({ children }: FormWrapperProps) {
    return (
        <>
            <div
                id="PWFORM"
                style={{
                    gap: "1rem .5rem",
                    justifyContent: "flex-start",
                    gridTemplateColumns: "auto minmax(auto, 400px)",
                }}
            >
                {children}
            </div>
        </>
    );
}
