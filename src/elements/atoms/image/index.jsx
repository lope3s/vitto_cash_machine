import ImageComponent from './style';

const Image = ({ img, width = "518px", height = "262px" }) => (
    <ImageComponent src = { img } width = {width} height = {height}/>
)

export default Image