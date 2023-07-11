export default (field) => {
    return `<label> 
                ${field?.label}:
                <input type="number" name="${field.name}" />
            </label>`;
}
