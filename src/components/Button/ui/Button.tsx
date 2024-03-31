import { ReactNode } from "react";
import classes from "./Button.module.scss";

export const Button = ({ children, className }: { children: ReactNode; className?: string }) => {
    return <button className={classes.Button + " " + className}>{children}</button>;
};
