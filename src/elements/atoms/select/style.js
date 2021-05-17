import styled from 'styled-components';

const SelectComponent = styled.select`
    width: 318px;
    height: 40px;
    margin: ${props => props.margin && props.margin};

    border: 1px solid #000;
    border-radius: 5px;
`

export default SelectComponent