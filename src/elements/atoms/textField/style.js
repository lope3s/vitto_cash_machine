import styled from 'styled-components'

const TextField = styled.p`
    display: inline-block;
    margin: ${props => props.margin && props.margin};
    
    color: ${props => props.title ? '#009AFE' : props.color ? props.color : "#000"};
    text-shadow: ${props => props.title && "2px 2px 2px rgba(0, 0, 0, .5)"};
    font-family: ${props => props.alterFont ? "'Lobster', cursive" : 'Roboto, sans-serif'};
    font-size: ${props => props.size && props.size};
    font-weight: ${props => props.bold && props.bold};
`

export default TextField