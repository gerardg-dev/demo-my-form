export const areFirstAndLastCharsSimilar = str => {
  let regularExp = /^(.).*\1$/;
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const doStringStartsWithUppercase = str => {
  let regularExp = "(?=.*^[A-Z])";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const doStringStartsWithLowercase = str => {
  let regularExp = "(?=.*^[a-z])";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const doStringEndsWithUppercase = str => {
  let regularExp = "(?=.*[A-Z]$)";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const doStringEndsWithLowercase = str => {
  let regularExp = "(?=.*[a-z]$)";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const doStringStartWithSubstr = (str, substr) => {
  let regularExp = "^(?=" + substr + ")";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const stringDoesntStartWithSubstr = (str, substr) => {
  let regularExp = "^(?!" + substr + ")";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const doStringEndWithSubstr = (str, substr) => {
  let regularExp = "^.*." + substr + "$";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const stringDoesntEndWithSubstr = (str, substr) => {
  let regularExp = "^(?!.*." + substr + "$)";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const stringContainsSubstr = (str, substr) => {
  let regularExp = "^.*" + substr + ".*$";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const stringDoesntContainSubstr = (str, substr) => {
  let regularExp = "^((?!" + substr + ").)*$";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const stringHasAnySpaces = str => {
  let regularExp = /\s/;
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const stringHasOnlySpaces = str => {
  let regularExp = /^ *$/;
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const stringHasOnlyWhiteSpace = str => {
  let regularExp = /^\s*$/;
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const stringHasOnlyOneSpace = str => {
  let regularExp = /^[^ ]* [^ ]*$/;
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const containsAtLeastOneLowercase = str => {
  let regularExp = "(?=.*[a-z])";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const containsOnlyLowercase = str => {
  let regularExp = /^[a-z]*$/; // or "^[a-z]*$"
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const containsAtLeastOneUppercase = str => {
  let regularExp = "(?=.*[A-Z])";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const containsOnlyUppercase = str => {
  let regularExp = /^[A-Z]*$/; // or "^[A-Z]*$"
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const containsAtLeastOneNumeric = str => {
  let regularExp = "(?=.*[0-9])";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const containsOnlyNumeric = str => {
  let regularExp = /^[0-9]*$/; // or "^[0-9]*$"
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const containsAtLeastOneSpecialChar = str => {
  let regularExp = "(?=.*[!@#$%^&*])";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const containsOnlySpecialChar = str => {
  let regularExp = /^[!@#$%^&*]*$/; // or "^[!@#$%^&*]*$"
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const stringMeetsMinMaxLength = (str, min, max) => {
  let regularExp = "^.{" + min + "," + max + "}$";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const oneAlphaOneNumericMinSix = str => {
  let regularExp =
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const oneUpperOneLowerOneNumericOneSpecMinEight = str => {
  let regularExp =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const stringMeetsWordLimit = (str, min, max) => {
  let regularExp = "^(((^\\s*)*\\S+\\s+)|(\\S+)){" + min + "," + max + "}$";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};

export const stringFormat1 = str => {
  let regularExp = "(?=.*d)(?=.*[a-z])(?=.*[A-Z])^[w!@$#.+-]{8,64}$";
  const regExp = new RegExp(regularExp);
  return regExp.test(str);
};
