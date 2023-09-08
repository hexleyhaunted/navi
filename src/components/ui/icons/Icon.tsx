import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./icon.scss";
import {cn} from "@/utils";
import React from "react";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

export default function Icon({icon, className}: {icon: IconDefinition, className?: string}) {
    return <div className={cn(["icon-container", className])}>
        <FontAwesomeIcon icon={icon} className={"icon"}/>
    </div>
}