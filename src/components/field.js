export class Field {
    _value;
    constructor(name, label, validationRule = null, type = "text", required = false) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.required = required;
        if (validationRule) {
            this.validate = validationRule;
        }
    }
    // Default validation method
    validate(){
       return !this.required && this?._value;
    }
    setValue(value) {
        this._value = value;
    }
    getValue(value) {
        return this._value;
    }
}
