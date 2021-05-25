import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #454545;
    margin-top: 30px;
    flex-direction: column;

    div {
        margin: 20px 0px;

        div {
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            input{
                height: 40px;
                margin-left: 40px;
                font-size: 20px;
                text-align: center;
            }
        }
    }
`