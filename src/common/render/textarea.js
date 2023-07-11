export default (field) => {
    return `<label> 
                ${field?.label}:
                <input type="textarea" name="${field.name}" />
            </label>`;
}
