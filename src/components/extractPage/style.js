import styled from 'styled-components';

const ExtractComponent = styled.div`
    display: flex;
    flex-direction: column;

    button{
        margin: 0 2vw 0 auto;
    }

    padding-top: 2vw;

    .information, .operations{
        width: calc(100% - 4vw);
        margin: 0 2vw;
    }

    hr {
        display: block;
        width: 95%;
    }

    .information{
        display:flex;
        justify-content: space-between;
    }

    .operations {
        overflow-y: auto;
        height: 675px;
    }
`

export default ExtractComponent