import {cn} from "@/utils";
import "./message-page.scss";
import {useEffect, useState} from "react";

export default function MessagePage({className, message, animateMessage}: {className?: string, message: string, animateMessage?: boolean}) {
    const ANIMATION_SPEED = 0.7;
    const [slicedMessage, setSlicedMessage] = useState(message);
    let iterationCount = 0;

    useEffect(() => {
        setImageAnimationSpeed();
    }, []);

    function onAnimationIteration() {
        if(!animateMessage) return;
        addNextLetter();
        setTimeout(addNextLetter, (ANIMATION_SPEED / 2) * 1000);
    }

    function addNextLetter() {
        iterationCount++;
        const updatedSlicedMessage = getUpdatedSlicedMessage();
        setSlicedMessage(updatedSlicedMessage);
    }

    function getUpdatedSlicedMessage() {
        const charactersToShow = iterationCount % (message.length + 1);
        return message.substring(0, charactersToShow);
    }

    function setImageAnimationSpeed() {
        const imageEL: HTMLImageElement = document.querySelector(".message-page .animation-wrapper .image-wrapper .animated-image");
        if(imageEL) {
            imageEL.style.setProperty("animation-duration", `${ANIMATION_SPEED}s`);
            imageEL.addEventListener("animationiteration", onAnimationIteration);
        }
    }

    return (
        <div className={cn(["expanding-wrapper", "liminal-page", "message-page", className])}>
            <div className={"animation-wrapper"}>
                <div className={"image-wrapper"}>
                    <img src={"/happy-face.png"} alt={"happy face"} className={"animated-image"}/>
                </div>
                <div className={"message-wrapper"}>
                    <p className={"message-spacer"}>{message}</p>
                    <p className={"message"}>{slicedMessage}</p>
                </div>
            </div>
        </div>
    )
}