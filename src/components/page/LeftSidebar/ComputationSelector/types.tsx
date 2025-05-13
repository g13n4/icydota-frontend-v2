interface ComputationSelectorItem {
    id: number;
    name: string;
    group: number;
  }
  
interface ComputationSelectorType {
    computations: ComputationSelectorItem[];
}

  export type { ComputationSelectorItem, ComputationSelectorType };