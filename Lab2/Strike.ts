import {Decorator} from "./Decorator";

export class Strike extends Decorator {
    public operation(): string {
        return super.operation().strike();
    }
}