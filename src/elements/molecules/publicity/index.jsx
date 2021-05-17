import PublicityComponent from './style';
import Text from '../../atoms/textField';
import Image from '../../atoms/image';

const Publicity = (props) => (
    <PublicityComponent>
        {
            props.textContent &&
            props.textContent.map((string, index) => (
                <Text key = {index} size = "1.8rem" alterFont = { true } content = {string}/>
            ))
        }
        <Image img = { props.img } width = {props.width} height = {props.height}/>
    </PublicityComponent>
)

export default Publicity