import React from "react";

export default function WithHide({children, isHidden}: {children: React.ReactNode, isHidden?: boolean}) {
    return <>
        {isHidden ? <></> : children}
    </>
}