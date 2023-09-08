import BaseButton from "@/components/ui/buttons/BaseButton";
import {cn} from "@/utils";
import "./outlined-button.scss";
import Icon from "@/components/ui/icons/Icon";
import {OutlinedIconButtonProps} from "@/components/ui/buttons/buttonTypes";

export default function OutlinedIconButton({className, icon, onClick, isDisabled, id, buttonStyle, tooltipText, tooltipAnchorPosition}: OutlinedIconButtonProps) {

    return <BaseButton
        className={cn(["outlined-button", "icon-button", className])}
        onClick={onClick}
        isDisabled={isDisabled}
        id={id}
        buttonStyle={buttonStyle}
        tooltipText={tooltipText}
        tooltipAnchorPosition={tooltipAnchorPosition}
    >
        <Icon icon={icon}/>
    </BaseButton>
}