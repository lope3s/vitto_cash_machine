import TextField from './style'

const Text = ({ content, isTitle = undefined , size = '1rem', alterFont = undefined, color, margin, bold, className}) => (
    <TextField title = { isTitle } size = { size } alterFont = {alterFont} color = {color} margin = {margin} bold = {bold} className = {className}>{ content }</TextField>
)

export default Text