import {Decorator} from "./Decorator";

export class Bold extends Decorator {
    public operation(): string {
        return super.operation().bold();
    }
}
