function compareVals(
  value1: string | undefined,
  value2: string | undefined,
  compareTo: string,
): boolean {
  if (value1 !== undefined) {
    return value1 === compareTo;
  }
  if (value2 !== undefined) {
    return value2 === compareTo;
  }
  return false;
}

export { compareVals };
