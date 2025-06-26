const NANCOLOUR = "rgba(164,167,165, 0.25)";

function getColours(isDarkTheme: boolean) {
  if (isDarkTheme) {
    return [
      "rgba(226, 124, 124, 0.75)",
      "rgba(168, 100, 100, 0.75)",
      "rgba(109, 75, 75, 0.75)",
      "rgba(80, 63, 63, 0.75)",
      "rgba(51, 51, 51, 0.75)",
      "rgba(60, 78, 75, 0.75)",
      "rgba(69, 102, 97, 0.75)",
      "rgba(70, 105, 100, 0.75)",
      "rgba(89, 158, 148, 0.75)",
      "rgba(108, 212, 197, 0.75)",
    ];
  }

  return [
    "rgba(17, 95, 154, 0.75)",
    "rgba(25, 132, 197, 0.75)",
    "rgba(34, 167, 240, 0.75)",
    "rgba(72, 181, 196, 0.75)",
    "rgba(118, 198, 143, 0.75)",
    "rgba(166, 215, 91, 0.75)",
    "rgba(201, 229, 47, 0.75)",
    "rgba(244, 241, 0, 0.75)",
    "rgba(225, 166, 146, 0.75)",
    "rgba(222, 110, 86, 0.75)",
    "rgba(194, 55, 40, 0.75)",
  ];
}

function getTargetColor(
  colours: string[],
  value: number | string,
  min: number,
  max: number,
  isDarkTheme: boolean,
) {
  const textColour = isDarkTheme ? "white" : "black";
  if (
    Number.isNaN(Number(value)) ||
    null === value ||
    typeof value === "string"
  ) {
    return { color: textColour, backgroundColor: NANCOLOUR };
  }
  if ((min === max && value) || max === value) {
    return { color: textColour, backgroundColor: colours[9] };
  } 
  if (min === value) {
    return { color: textColour, backgroundColor: colours[0] };
  }

  const colourIndex = Math.floor(((value - min) / (max - min)) * 10);
  return { color: textColour, backgroundColor: colours[colourIndex] };
}

export { getColours, getTargetColor };
