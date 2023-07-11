import { Field } from "../../components/field.js";

class Renderer {

    constructor(obj) {
    }

    async renderField(field, callback) {
        if (field instanceof Field) {
            try {
                const rFxn = await import(`./${field.type}.js`);
                callback(rFxn.default(field));
            } catch (e) {
                // do something here when you fail to load the render file
            }
        } else {
            console.log("Throw some exception here or handle it depending on app")
        }
    }
}

export default Renderer;
