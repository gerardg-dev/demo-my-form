const objHasKey = (obj, key) => key in obj;

const isObjectEmpty = obj => {
  if (obj === null || obj === undefined) return null;
  let ans =
    Object.keys(obj).length === 0 && obj.constructor === Object ? true : false;
  return ans;
};

export default (
  nameOfStyle,
  individualStyle,
  individualAddStyle,
  individualClassName,
  individualAddClassName,
  stateStyles,
  propsStyles
) => {
  let style = {};
  let addStyle = {};
  let className = "";
  let addClassName = "";

  const isElementStyleObjectPassedAsProp = name => {
    if (propsStyles.style === undefined) return false;
    if (propsStyles.style === null) return false;
    if (isObjectEmpty(propsStyles.style)) return false;
    if (!objHasKey(propsStyles.style, name)) return false;
    if (isObjectEmpty(propsStyles.style[name])) return false;
    return true;
  };
  const isElementAddStyleObjectPassedAsProp = name => {
    if (propsStyles.addStyle === undefined) return false;
    if (propsStyles.addStyle === null) return false;
    if (isObjectEmpty(propsStyles.addStyle)) return false;
    if (!objHasKey(propsStyles.addStyle, name)) return false;
    if (isObjectEmpty(propsStyles.addStyle[name])) return false;
    return true;
  };
  const isElementClassNamePassedAsProp = name => {
    if (propsStyles.className === undefined) return false;
    if (propsStyles.className === null) return false;
    if (isObjectEmpty(propsStyles.className)) return false;
    if (!objHasKey(propsStyles.className, name)) return false;
    if (propsStyles.className[name].length === 0) return false;
    return true;
  };
  const isElementAddClassNamePassedAsProp = name => {
    if (propsStyles.addClassName === undefined) return false;
    if (propsStyles.addClassName === null) return false;
    if (isObjectEmpty(propsStyles.addClassName)) return false;
    if (!objHasKey(propsStyles.addClassName, name)) return false;
    if (propsStyles.addClassName[name].length === 0) return false;
    return true;
  };

  style = isElementStyleObjectPassedAsProp(nameOfStyle)
    ? propsStyles.style[nameOfStyle]
    : stateStyles.style[nameOfStyle];
  addStyle = isElementAddStyleObjectPassedAsProp(nameOfStyle)
    ? {
        ...stateStyles.addStyle[nameOfStyle],
        ...propsStyles.addStyle[nameOfStyle]
      }
    : stateStyles.addStyle[nameOfStyle];
  className = isElementClassNamePassedAsProp(nameOfStyle)
    ? propsStyles.className[nameOfStyle]
    : stateStyles.className[nameOfStyle];
  addClassName = isElementAddClassNamePassedAsProp(nameOfStyle)
    ? `${stateStyles.addClassName[nameOfStyle]} ${propsStyles.addClassName[nameOfStyle]}`
    : stateStyles.addClassName[nameOfStyle];

  const isObjValid = obj => {
    if (obj === null || obj === undefined) return false;
    if (isObjectEmpty(obj)) return false;
    return true;
  };
  const isStrValid = str => {
    if (str === null || str === undefined) return false;
    if (str.length === 0) return false;
    return true;
  };

  style = isObjValid(individualStyle) ? individualStyle : style;
  addStyle = isObjValid(individualAddStyle)
    ? { ...addStyle, ...individualAddStyle }
    : addStyle;
  className = isStrValid(individualClassName) ? individualClassName : className;
  addClassName = isStrValid(individualAddClassName)
    ? `${addClassName} ${individualAddClassName}`
    : addClassName;

  return { style, addStyle, className, addClassName };
};
