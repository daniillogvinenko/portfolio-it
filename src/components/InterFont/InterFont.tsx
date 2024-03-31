import { ReactNode } from "react";

export const InterFont = ({ children }: { children: ReactNode }) => {
    return <span style={{ fontFamily: "Arial" }}>{children}</span>;
};
