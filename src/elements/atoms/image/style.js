import styled from 'styled-components';

const ImageComponent = styled.img`
    width: ${props => props.width && props.width};
    height: ${props => props.height && props.height};
`

export default ImageComponent