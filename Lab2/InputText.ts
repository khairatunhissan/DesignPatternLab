import {Text} from "./Text";


export class InputText implements Text {

    iText: string

    constructor(iText: string) {
        this.iText = iText
    }

    public operation(): string {
        return this.iText;
    }
}