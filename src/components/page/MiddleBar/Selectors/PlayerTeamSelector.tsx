import CustomTabsSelector from "@/components/Templates/Selectors/CustomTabsSelector";

const data = [
  {
    value: "player",
    label: "Player",
  },
  {
    value: "team",
    label: "Team",
  },

];

export default function PlayerTeamSelector() {
    return (
      <CustomTabsSelector
        fieldName="selectedPT"
        data={data}
        className="grid w-full grid-cols-2 shadow-shadow border-2"
        classNameMain="row-end-1"
      />
    );
}
