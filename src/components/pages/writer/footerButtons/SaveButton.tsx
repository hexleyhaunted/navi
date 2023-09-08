import OutlinedIconButton from "@/components/ui/buttons/outlined/OutlinedIconButton";
import {saveIcon} from "@/components/ui/icons/icons";
import AnchorPosition from "@/enums/AnchorPosition";

export default function SaveButton() {
    return <OutlinedIconButton
        icon={saveIcon}
        id={"save-article-button"}
        tooltipText={"Save your article"}
        tooltipAnchorPosition={AnchorPosition.TOP_RIGHT_ANCHOR_UP_LEFT_DIRECTION}
    />
}