import {useContext, useEffect} from "react";
import {DimensionsContext} from "@/context/dimensionsContext/DimensionsContext";
import {Dimension} from "@/context/dimensionsContext/DimensionsData";

export default function useDimensions() {
    const { dimensions, setDimensions } = useContext(DimensionsContext);

    useEffect(() => {
        window.addEventListener("resize", recalculateAllDimensions);

        return () => {
            window.removeEventListener("resize", recalculateAllDimensions);
        }
    }, []);

    function setDimension(elementId: string, dimension: Dimension) {
        const { height, width } = dimension;
        const el = document.getElementById(elementId);
        if(!el) return;

        if(height !== undefined) {
            el.style.height = height + "px";
            el.style.maxHeight = height + "px";
            el.style.minHeight = height + "px";
        }
        if(width !== undefined) {
            el.style.width = width + "px";
            el.style.maxWidth = width + "px";
            el.style.minWidth = width + "px";
        }

        if(dimensions[elementId]) {
            if(height !== undefined) dimensions[elementId].height = height;
            if(width !== undefined) dimensions[elementId].width = width;
        }
    }

    function getDimension(elementId: string) {
        if(dimensions[elementId]) return dimensions[elementId];
        return calculateDimension(elementId);
    }

    function calculateDimension(elementId: string): Dimension {
        const el = document.getElementById(elementId);
        if(!el) return;

        const dimension: Dimension = {};
        dimension.width = el.offsetWidth;
        dimension.height = el.offsetHeight;

        setDimensions((lastState) => (
            {...lastState, [elementId]: dimension}
        ));

        return dimension;
    }

    function recalculateAllDimensions() {
        const ids = Object.keys(dimensions);
        ids.forEach(id => {calculateDimension(id)});
    }

    return {
        dimensions,
        getDimension,
        setDimension
    }
}