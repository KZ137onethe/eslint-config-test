function getCurrentTime(options?: { format?: string }) {
  const INIT_VALUE = new Date().toLocaleTimeString("zh-CN");

  if (options?.format !== undefined) {
    return String(INIT_VALUE).replace(/:/g, options.format);
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
    defaultVal = `${year}/${`0${month}`}/${day}`;
  }

  if (options?.format !== undefined) {
    return String(defaultVal).replace(/:/g, options.format);
  }
  return defaultVal;
}

const time = getCurrentTime({ format: "-" });
const date = getCurrentDate();

console.log(`${date} ${time}`);

// eslint-disable-next-line ts/naming-convention
enum foo {
  SendCond = 1000,
}
