// Hooks
interface TableDataHookType {
	// type of information
	tournamentId: number;
	isByTeam: boolean;

	// general data
	calculationId: number | null;
	stage: "lane" | "game" | "both";

	// comparison
	isFlat: boolean | null;
}

interface TableMatchDataHookType extends TableDataHookType {
	matchId: number;
	isBasic: boolean; // comparison
}

interface TableAggregationDataHookType extends TableDataHookType {
	type: number;
}

interface TableDataCComparisonHookType
	extends Omit<TableDataHookType, "stage"> {
	type: number;
	position: number;
	field: string;
}

// Data
interface TableDataFieldsType {
	rows: string[];
	columns: string[];
	values: string[];
	valueInCols?: boolean;
}

interface TableDataType {
	fields: TableDataFieldsType;
	windowsData: number[];
}

interface TableMapType {
	col: string;
	max: number;
	min: number;
}

interface TableDataResponseType {
	valueMapping: TableMapType[];
	tableData: TableDataType;
}

export type {
	TableAggregationDataHookType,
	TableDataCComparisonHookType,
	TableDataResponseType,
	TableMatchDataHookType,
};

