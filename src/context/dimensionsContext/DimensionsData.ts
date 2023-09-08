import React from "react";

export type Dimension = { width?: number, height?: number };

export type DimensionsData = Record<string, Dimension>

export type DimensionsContextData = {
    dimensions: DimensionsData,
    setDimensions: React.Dispatch<React.SetStateAction<DimensionsData>>
}