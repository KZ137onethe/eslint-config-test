class DateHandler {
  public static getCurrentTime(options?: { format?: string }) {
    const result = {
      value: undefined,
    };
    Object.defineProperty(result, "value", {
      writable: true,
      configurable: false,
      enumerable: false,
      value: new Date().toLocaleTimeString("zh-CN"),
    });

    if (options?.format !== undefined) {
      return String(result.value).replace(/:/g, options.format);
    }
    return result.value;
  }

  public static getCurrentDate(options?: { format?: string }) {
    const result = {
      value: undefined,
    };
    Object.defineProperty(result, "value", {
      writable: true,
      configurable: false,
      enumerable: false,
      value: new Date().toLocaleDateString("zh-CN"),
    });

    if (options?.format !== undefined) {
      return String(result.value).replace(/:/g, options.format);
    }
    return result.value;
  }
}

const time = DateHandler.getCurrentDate({ format: "-" });

console.log(time);
