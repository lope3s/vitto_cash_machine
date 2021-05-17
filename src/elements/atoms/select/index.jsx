import SelectComponent from './style'

const Select = ({ options, callback, margin }) => (
    <SelectComponent onChange = {callback} margin = {margin}>
        <option>Selecione a operação</option>
        {
            options.map((value, index) => (
                <option key = {index} value = {value.toLowerCase()}>{value}</option>
            ))
        }
    </SelectComponent>
)

export default Select