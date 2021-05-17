import styled from 'styled-components';

const Container = styled.div`
    border: 5px solid #000;
    border-radius: 5px;

    width: 589px;
    height: 417px;
    
    margin: 0 auto;
    transform: translate(0, 45%);

    display: flex;
    flex-direction: column;

    .text {
        margin-left: 2vw;
    }

    .text:nth-child(3n){
        margin-bottom: 0;
    }

    .amount {
        margin-left: auto;
        margin-right: 2vw;
    }

    hr {
        display: block;
        width: 87%;
    }

    .buttonBox {
        width: calc(100% - 4vw);
        display: flex;
        justify-content: space-between;
        padding: 0 2vw;
    }

`

export default Container