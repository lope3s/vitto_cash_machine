import { ButtonContainer } from './style';

const Button = ({ content, callback }) => (
    <ButtonContainer onClick = {callback}>{content}</ButtonContainer>
)

export default Button