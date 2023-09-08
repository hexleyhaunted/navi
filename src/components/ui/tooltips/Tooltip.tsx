import React, {useRef} from "react";
import {cn} from "@/utils";
import "./tooltip.scss";
import {TooltipProps, WithTooltipProps} from "@/components/ui/tooltips/tooltipTypes";
import WithHide from "@/components/wrappers/withHide/WithHide";

export default function WithTooltip({children, anchorPosition, message, isDisabled}: WithTooltipProps) {
    let tooltipTimer: NodeJS.Timeout;
    isDisabled = isDisabled || message == "";

    function onHoverStart(e: React.MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        if(isDisabled) return;

        const el = e?.currentTarget;
        if(el != undefined) {
            tooltipTimer = setTimeout(() => {
                triggerTooltipAppear(el)
            }, 2000);
        }
    }

    function onHoverEnd(e: React.MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        if(isDisabled) return;

        if(tooltipTimer) clearTimeout(tooltipTimer);
        e.currentTarget?.classList?.remove("visible");
    }

    function triggerTooltipAppear(el: HTMLDivElement) {
        el?.classList?.add("visible");
    }

    return <div
        className={cn(["tooltip-wrapper"])}
        onMouseEnter={(e) => onHoverStart(e)}
        onMouseLeave={(e) => onHoverEnd(e)}
    >
        {children}
        <WithHide isHidden={isDisabled}>
            <Tooltip message={message} anchorPosition={anchorPosition} />
        </WithHide>
    </div>
}

function Tooltip({message, anchorPosition}: TooltipProps) {
    const anchorClass = anchorPosition.toString();

    return <div className={cn(["tooltip", anchorClass])}>
        <p>{message}</p>
    </div>
}