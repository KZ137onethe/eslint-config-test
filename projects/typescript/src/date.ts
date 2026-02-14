function getCurrentTime(options?: { format?: string }) {
  const INIT_VALUE = new Date().toLocaleTimeString("zh-CN");

  if (options?.format !== undefined) {
    return INIT_VALUE.replace(/:/g, options.format);
  }
  return INIT_VALUE;
}

function getCurrentDate(options?: { format?: string }) {
  const INIT_VALUE = new Date().toLocaleDateString("zh-CN");
  // 短月份长度
  const MONTH_SHORT_LEN = 1;
  const [year, month, day] = INIT_VALUE.split("/");
  let defaultVal = INIT_VALUE;
  if (month.length === MONTH_SHORT_LEN) {
    defaultVal = `${year}/0${month}/${day}`;
  }

  if (options?.format !== undefined) {
    return defaultVal.replace(/:/g, options.format);
  }
  return defaultVal;
}

interface DateCompareOpts {
  calc: "less" | "more" | "equal" | "congruent";
}

function compareDate(preVal: Date | string, nextVal: Date | string, options?: DateCompareOpts) {
  const getUtcVal = (val: string): [number, number, number] => val.split(/(\d{4})(\d{2})(\d{2})/).filter(Boolean).map((item, idx) => {
    const UTC_SPECIAL_POS = 1;
    const REDUCE_VAL = 1;
    if (idx === UTC_SPECIAL_POS) {
      return Number(item) - REDUCE_VAL;
    }
    return Number(item);
  });
  // 转换为 Date
  const firstVal = preVal instanceof Date ? preVal : new Date(...getUtcVal(preVal));
  const secondVal = nextVal instanceof Date ? nextVal : new Date(...getUtcVal(nextVal));
}

const time = getCurrentTime({ format: "-" });
const date = getCurrentDate();

console.log(`${date} ${time}`);

// eslint-disable-next-line ts/naming-convention
enum foo {
  SendCond = 1000,
}
