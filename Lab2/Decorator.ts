import {Text} from "./Text";

export class Decorator implements Text {
    protected component: Text;

    constructor(component: Text) {
        this.component = component;
    }

    public operation(): string {
        return this.component.operation();
    }
}