import Eventemitter3 from 'eventemitter3';
export default class Eventemitter extends Eventemitter3 {
    private prefixEventName;
    invoke(name: string, ...args: any[]): Promise<unknown>;
    watch(name: string, handler: (...args: any[]) => any): this;
}
