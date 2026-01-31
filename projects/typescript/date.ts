function getCurrentTime(options?: { format?: string }) {
  const INIT_VALUE = new Date().toLocaleTimeString("zh-CN");

  if (options?.format !== undefined) {
    return String(INIT_VALUE).replace(/:/g, options.format);
  }
  return INIT_VALUE;
}

function getCurrentDate(options?: { format?: string }) {
  const INIT_VALUE = new Date().toLocaleDateString("zh-CN");
  const [year, month, day] = INIT_VALUE.split("/");
  let defaultVal = INIT_VALUE;
  // 如果月份的位数为1，则修正
  if (month.length === 1) {
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
