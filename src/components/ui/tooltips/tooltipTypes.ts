import React from "react";
import AnchorPosition from "@/enums/AnchorPosition";

export type WithTooltipProps = {
    children: React.ReactNode,
    anchorPosition: AnchorPosition,
    message: string,
    isDisabled?: boolean,
}

export type TooltipProps = {
    message: string,
    anchorPosition: AnchorPosition,
}
