import "./page.scss";
import TitleBar from "@/components/titleBar/TitleBar";
import FooterBar from "@/components/footerBar/FooterBar";
import {ReactNode, useEffect} from "react";
import useDimensions from "@/hooks/useDimensions";

export default function Page({id, footerButtons, children}: {id: string, footerButtons?: ReactNode, children: ReactNode}) {
    const {getDimension, setDimension} = useDimensions();

     useEffect(() => {
         setContextHeight();
     }, []);

    function setContextHeight() {
        const pageHeight = getDimension(id)?.height;
        const titleBarHeight = getDimension("title-bar")?.height;
        const footerBarHeight = getDimension("footer-bar")?.height;

        const contentHeight = pageHeight - titleBarHeight - footerBarHeight;
        setDimension("content", {height: contentHeight});
    }

    return <div id={id} className={"page"}>
        <TitleBar/>
        <div id={"content"}>
            {children}
        </div>
        <FooterBar>
            {footerButtons}
        </FooterBar>
    </div>
}