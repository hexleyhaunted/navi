import React from "react";
import {ButtonStyle} from "@/enums/ButtonStyle";
import AnchorPosition from "@/enums/AnchorPosition";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

export type BaseButtonProps = {
    className?: string,
    onClick?: () => void,
    children: React.ReactNode,
    isDisabled?: boolean,
    buttonStyle?: ButtonStyle,
    id: string,
    tooltipText?: string,
    tooltipAnchorPosition?: AnchorPosition,
}

export type OutlinedIconButtonProps = {
    className?: string,
    icon: IconDefinition,
    onClick?: () => void,
    isDisabled?: boolean,
    id: string,
    buttonStyle?: ButtonStyle,
    tooltipText?: string,
    tooltipAnchorPosition?: AnchorPosition,
}

export type OutlinedTextButtonProps = {
    className?: string,
    text: string,
    onClick?: () => void,
    isDisabled?: boolean,
    id: string,
    buttonStyle?: ButtonStyle,
    tooltipText?: string,
    tooltipAnchorPosition?: AnchorPosition,
}