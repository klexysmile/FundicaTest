import { Field } from "./src/components/field.js";
import Renderer from "./src/common/render/index.js";
import { isEmail, isPhone } from "./src/common/validation/text.js";

// const testUrl = "https://www.fundica.com";
// const domain = /:\/\/([^\/]+)/.exec(testUrl)[1];
const domain = /:\/\/([^\/]+)/.exec(window.location.href)[1];

let fields = [];
switch (domain) {
    case 'domain1.fundica.com':
        fields = [
            new Field('email', "Email"),
            new Field('phone', "Phone Number"),
            new Field('first_name', "First Name"),
        ];
        break;
    case 'domain2.fundica.com':
        fields = [
            new Field('email', "Email")
        ];
        break;
    case 'domain3.fundica.com':
        fields = [
            new Field('first_name', "First Name"),
            new Field('last_name', "Last Name"),
            new Field('postal_code', "Postal Code")
        ];
        break;
    default:
        fields = [
            new Field('email', "Email", isEmail),
            new Field('phone', "Phone Code", isPhone)
        ];
        break;
}


const outputtedFields = [];
const updateFields = (o) => {
    // Use function to update form on UI
    outputtedFields.push(o);
    console.log(o);
}

const renderer = new Renderer();
const promises = []
for(const field of fields) {
    field.setValue('a@a.com');//SKipping form implementation to be able to set a value
    promises.push(renderer.renderField(field, updateFields));
}

console.log("Outputting fields to be rendered ...");

Promise.all(promises).then((a) => {
    for (const field of fields) {
        console.log(field.validate(field.getValue()));
    }
});


