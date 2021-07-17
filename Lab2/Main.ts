import {Text} from "./Text";
import {InputText} from "./InputText";
import {Bold} from "./Bold";
import {Italic} from "./Italic";
import {Strike} from "./Strike";

function clientCode(component: Text) {
    console.log(`RESULT: ${component.operation()}`);
}

const example = new InputText("Hissan");
const italic = new Italic(example);
const bold = new Bold(example);
const strike = new Strike(example);