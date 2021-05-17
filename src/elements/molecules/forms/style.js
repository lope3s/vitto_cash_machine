import styled from 'styled-components';

const FormComponent = styled.form`
    width: ${props => props.width && props.width};
    height: ${props => props.height && props.height};
    padding: 0;

    background-color: #001A3B;
    border: 1px solid #000;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .inputs{
        p{
            align-self: flex-start;
        }

        margin: 0 auto;
        margin-bottom: 1vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }


`

export default FormComponent