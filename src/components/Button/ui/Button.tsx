import { MouseEventHandler, ReactNode } from "react";
import classes from "./Button.module.scss";

export const Button = ({
    children,
    className,
    onClick,
}: {
    children: ReactNode;
    className?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
    return (
        <button onClick={onClick} className={classes.Button + " " + className}>
            {children}
        </button>
    );
};
