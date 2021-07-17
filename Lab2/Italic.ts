
import {Decorator} from "./Decorator";

export class Italic extends Decorator {
    public operation(): string {
        return super.operation().italics();
    }
}