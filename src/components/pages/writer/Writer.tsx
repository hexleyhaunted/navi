import "./writer.scss";
import Page from "@/components/pages/basic/page/Page";
import WritingPanel from "@/components/pages/writer/writingPanel/WritingPanel";
import ParsedPanel from "@/components/pages/writer/parsedPanel/ParsedPanel";
import SaveButton from "@/components/pages/writer/footerButtons/SaveButton";
import DeleteButton from "@/components/pages/writer/footerButtons/DeleteButton";

export default function Writer() {
    return <Page id={"writer-page"} footerButtons={<><DeleteButton/><SaveButton/></>}>
        <div id={"writer-content"}>
            <WritingPanel/>
            <ParsedPanel/>
        </div>
    </Page>
}