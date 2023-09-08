import "./footer-bar.scss";
import React from "react";

export default function FooterBar({children}: {children: React.ReactNode}) {
    return <div id={"footer-bar"}>{children}</div>
}