import "./text-input.scss";
import {ChangeEvent, useEffect, useState} from "react";
import {hasVerticalScrollbar} from "@/utils/elements";

export default function TextInput({id, text, placeHolderText, onTextChange, maxLength}: {id: string, text?: string, placeHolderText?: string, onTextChange?: (changedText: string) => void, maxLength?: number}) {
    const [updatedText, setUpdatedText] = useState(text || "");

    useEffect(() => {
        setUpdatedText(() => text);
    }, [text]);

    function handleTextChange(e: ChangeEvent<HTMLTextAreaElement>) {
        e.preventDefault();
        const el = e?.currentTarget;
        const changedText = el?.value;
        updateTextAreaHeightToMatchText(el);
        setUpdatedText(() => changedText);
        if(onTextChange) onTextChange(changedText);
    }

    function updateTextAreaHeightToMatchText(el: HTMLTextAreaElement) {
        if(!el) return;
        el.style.height = "";
        el.style.height = el.scrollHeight + "px";
    }

    return <div className={"text-input-wrapper"} id={id}>
        <div className={"scroll-wrapper"}>
            <textarea
                className={"text-input"}
                value={updatedText}
                placeholder={placeHolderText}
                onChange={(e) => {handleTextChange(e)}}
                rows={1}
                maxLength={maxLength}
            />
        </div>
    </div>
}