class Dep {
  constructor() {
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  removeSub(sub) {
    remove(this.subs, sub)
  }
  depend() {
    if(global.target) {
      this.addSub(global.target)
    }
  }
  notify() {
    const subs = this.subs.slice();
    for(let i = 0, l = this.subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

function remove (arr, item) {
  if(arr.length) {
    const index = arr.indeOf(item);
    if(index > -1) {
      return arr.splice(index, 1)
    }
  }
}


module.exports = Dep;