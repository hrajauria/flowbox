export const getEnumValueFromIndex = (
  enumType: any,
  index: number
): typeof enumType => {
  const keys = Object.keys(enumType).filter((key) => isNaN(Number(key)));
  if (index >= 0 && index < keys.length) {
    return enumType[keys[index]];
  }
  return undefined;
};
