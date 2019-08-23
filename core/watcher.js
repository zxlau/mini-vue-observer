class Watcher {
  constructor(vm, expOrFn, cb) {
    this.vm = vm;
    this.getter = parsePath(expOrFn);
    this.cb = cb;
    this.value = this.get()
  }
  get() {
    global.target = this;
    let value = this.getter.call(this.vm, this.vm);
    global.target = undefined;
    return value;
  }
  update() {
    const oldValue = this.value;
    this.value = this.get();
    this.cb.call(this.vm, this.value, oldValue)
  }
}

function parsePath(path) {
  // const bailRE = /[^w.$]/;
  // if (bailRE.test(path)) {
  //   return
  // }
const segments = path.split('.');
return function (obj) {
    for (let i = 0; i < segments.length; i++) {
        if (!obj) return
            obj = obj[segments[i]]
        }
        return obj
    }
}

module.exports = Watcher;