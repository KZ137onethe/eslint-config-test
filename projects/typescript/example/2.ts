class MyClass {
  public log(): void {
    console.log(this);
  }

  public logBound = () => console.log(this);
}

const instance = new MyClass();

const myLog = instance.log;
const { log, logBound } = instance;
myLog();
log();
logBound();
