import Eventemitter3 from 'eventemitter3'
 
export default class Eventemitter extends Eventemitter3 {
  private prefixEventName(name: string): string {
    return 'JD@@B016E0AD63452AE4' + name
  }
 
  public invoke(name: string, ...args: any[]) {
    return new Promise((resolve, reject) => {
      if (this.eventNames().indexOf(name) <= -1) {
        reject('have no watcher at event(' + name + ')')
      }
 
      this.once(this.prefixEventName(name), resolve)
 
      this.emit.apply(this, [name].concat(Array.from(args)) as [string, any[]])
    })
  }
 
  public watch(name: string, handler: (...args: any[]) => any) {
    let fn = (...args: any[]) => {
      this.emit(this.prefixEventName(name), handler.apply(void 0, Array.from(args)))
    }

    this.on(name, fn)
 
    return this
  }
}