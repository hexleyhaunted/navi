import {cn} from "@/utils";
import React from "react";
import "./base-button.scss";
import {ButtonStyle} from "@/enums/ButtonStyle";
import {triggerAnimation} from "@/utils/styles";
import {is} from "immutable";
import WithTooltip from "@/components/ui/tooltips/Tooltip";
import {BaseButtonProps} from "@/components/ui/buttons/buttonTypes";
import anchorPosition from "@/enums/AnchorPosition";

export default function BaseButton({className, onClick, children, isDisabled, buttonStyle = ButtonStyle.PRIMARY, id, tooltipText, tooltipAnchorPosition}: BaseButtonProps) {
    const disabledClass = isDisabled ? "disabled" : "";
    const buttonStyleClass = buttonStyle;

    function handleClick() {
        if(isDisabled) return;
        triggerAnimation(id);
        if(onClick) onClick();
    }

    return (
        <WithTooltip anchorPosition={tooltipAnchorPosition || anchorPosition.TOP_LEFT_ANCHOR_UP_RIGHT_DIRECTION} message={tooltipText || ""} isDisabled={!!isDisabled}>
            <button id={id} className={cn(["button", className, disabledClass, buttonStyleClass])} onClick={handleClick}>
            { children }
            </button>
        </WithTooltip>
    );
}