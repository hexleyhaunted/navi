import React, {createContext, useState} from "react";
import {DimensionsContextData, DimensionsData} from "@/context/dimensionsContext/DimensionsData";

export const DimensionsContext = createContext<DimensionsContextData>({
    dimensions: {},
    setDimensions: () => {}
});

export function DimensionsContextProvider({children}: {children: React.ReactNode}) {
    const [dimensions, setDimensions] = useState<DimensionsData>({});

    const defaultContextValue: DimensionsContextData = {
        dimensions,
        setDimensions
    }

    return (
        <DimensionsContext.Provider value={defaultContextValue}>
            {children}
        </DimensionsContext.Provider>
    )
}