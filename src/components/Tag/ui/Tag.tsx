import { ReactNode } from "react";
import classes from "./Tag.module.scss";

export const Tag = ({ children }: { children: ReactNode }) => {
    return <div className={classes.Tag}>{children}</div>;
};
