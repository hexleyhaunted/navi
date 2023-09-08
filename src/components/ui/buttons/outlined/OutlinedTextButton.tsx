import BaseButton from "@/components/ui/buttons/BaseButton";
import {cn} from "@/utils";
import "./outlined-button.scss";
import {ButtonStyle} from "@/enums/ButtonStyle";
import {OutlinedTextButtonProps} from "@/components/ui/buttons/buttonTypes";

export default function OutlinedTextButton({className, text, onClick = () => {}, isDisabled, id, buttonStyle, tooltipText, tooltipAnchorPosition}: OutlinedTextButtonProps) {

    return <BaseButton
        className={cn(["outlined-button", "text-button", className])}
        onClick={onClick}
        isDisabled={isDisabled}
        id={id}
        buttonStyle={buttonStyle}
        tooltipText={tooltipText}
        tooltipAnchorPosition={tooltipAnchorPosition}
    >
        {text}
    </BaseButton>
}