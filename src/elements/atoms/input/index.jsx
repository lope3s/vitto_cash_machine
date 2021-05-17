import InputComponent from './style';

const Input = ({ placeholder, margin, callback, type, value }) => (
    <InputComponent placeholder = {placeholder} margin = {margin} onChange = {callback} type = {type} value = {value}/>
)

export default Input    