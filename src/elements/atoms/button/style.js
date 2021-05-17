import styled from  'styled-components';

export const ButtonContainer = styled.button`
    width: 214px;
    height: 47px;
    background-color: #FD3E01;
    border: 1px solid #000;
    border-radius: 5px;
    display: inline-block;

    color: #fff;
    font-family: Roboto, sans-serif;
    font-size: 1.25rem;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, .5);
    box-shadow: 2px 2px 2px 0.5px rgba(0, 0, 0, .5);

    :hover{
        cursor: pointer;
    }
    
    :active {
        background-color: rgba(235, 62, 1, 1);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), inset 2px 2px 2px 0.5px rgba(0, 0, 0, .5);;
        text-shadow: 3px 3px 3px rgba(0, 0, 0, .5);
    }
`