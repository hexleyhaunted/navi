import OutlinedIconButton from "@/components/ui/buttons/outlined/OutlinedIconButton";
import {deleteIcon} from "@/components/ui/icons/icons";
import AnchorPosition from "@/enums/AnchorPosition";
import {ButtonStyle} from "@/enums/ButtonStyle";

export default function DeleteButton() {
    return <OutlinedIconButton
        icon={deleteIcon}
        id={"delete-article-button"}
        tooltipText={"Delete your article"}
        tooltipAnchorPosition={AnchorPosition.TOP_RIGHT_ANCHOR_UP_LEFT_DIRECTION}
        buttonStyle={ButtonStyle.ERROR}
    />
}