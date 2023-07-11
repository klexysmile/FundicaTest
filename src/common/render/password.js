export default (field) => {
    return `<label> 
                ${field?.label}:
                <input type="text" name="${field.name}" />
            </label>`;
}
