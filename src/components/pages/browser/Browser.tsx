import "./browser.scss";
import Page from "@/components/pages/basic/page/Page";
import PlaceholderPage from "@/components/liminalPages/PlaceholderPage";

export default function Browser() {
    return <Page id={"browser-page"}>
        <PlaceholderPage/>
    </Page>
}