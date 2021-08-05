export function setNumberFormat(val) {
  val = val.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
  val = val.replace(/^\./g, ""); //验证第一个字符是数字
  val = val.replace(/\.{1,}/g, "."); //只保留第一个, 清除多余的
  val = val.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
  val = val.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数
  return val
}

export function clearLastPoint(val) {
  val = val.replace(/\.$/, '')
  return val
}

export function is(val) {
  return Object.prototype.toString.call(null, val)
}

export function isFunction(val) {
  return is(val) === "[object Function]"
}
export function isString(val) {
  return is(val) === "[object String]"
}