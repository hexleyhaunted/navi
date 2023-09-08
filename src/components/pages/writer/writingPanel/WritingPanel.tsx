import "./writing-panel.scss";
import TextInput from "@/components/pages/writer/writingPanel/textInput/TextInput";

export default function WritingPanel() {
    return <div id={"writing-panel"}>
        <TextInput id={"demo-text-input"} placeHolderText={"type here"}/>
    </div>
}