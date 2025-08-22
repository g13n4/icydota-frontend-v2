import { usePageTypeContext } from "@/components/context/DataTypeChoiceProvider";
import { useInitialDataContext } from "@/components/context/InitialDataProvider";
import type { TableDataRepresentationType } from "./types";



export default function useTableDataRepresentation(): TableDataRepresentationType {
    const { selectedCalculationId, selectedDataFormat, selectedPT } = usePageTypeContext();
    const { code, windowRepresentation, totalRepresentation } = useInitialDataContext();
    const isTotal = selectedCalculationId === "0"

    const formattingIndexId = code[selectedDataFormat] + code[selectedPT]
    const formattingId = windowRepresentation?.[selectedCalculationId]?.[formattingIndexId]
    

    if (isTotal) {
        const output: {manyFormat: Record<string, number>} = {manyFormat: {}}
        for (const [totalName, subDict] of Object.entries(totalRepresentation) ) {
            const possibleFormattingId = subDict?.[formattingIndexId]
            if (possibleFormattingId) {
                output.manyFormat[totalName] = possibleFormattingId
            }
        }
        return output
    }

    
    return { singleFormat: formattingId }
}