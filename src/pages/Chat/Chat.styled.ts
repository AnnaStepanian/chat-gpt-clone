import styled from "styled-components";

export const ChatContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #555555;
    height: 100vh;
`;

export const ChatWrapper = styled.div`
    max-width: 60vw;
    width: 100%;
`;

export const ChatHeader = styled.div`
    display: flex;
    background-color: #1F1D1D;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding: 15px 30px 10px;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

export const UserName = styled.div`
    font-size: 18px;
    color: white;
    font-weight: 500;
`;

export const UserStatus = styled.div`
    color: #21FF5F;
    font-size: 16px;
`;

export const ChatBody = styled.div`
    height: 500px;
    background: url('https://blog.1a23.com/wp-content/uploads/sites/2/2020/02/Desktop.png') no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 16px 26px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const ChatMessageInput = styled.input`
    background-color: #312F2F;
    width: 100%;
    padding: 8px 26px;
    border-radius: 25px;
    outline: none;
    border: none;
    color: #cfcfcf;
    font-size: 14px;
    border: 2px solid #009a2b;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

export const SubmitMessageBtn = styled.button`
    background-color: #009a2b;
    color: white;
    outline: none;
    cursor: pointer;
    border: none;
    padding: 8px 26px;
    border-radius: 25px;
    margin-left: -85px;
    transition: all 0.3s;

    &:hover {
        transition: all 0.3s;
        background-color: #0c6826;
    }
`;

export const Messages = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    width: 100%;
    gap: 15px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 30px;
`;

export const Controls = styled.div`
    display: flex;
`;

export const UserMessage = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;

    p {
        max-width: 50%;
        width: 100%;
        padding: 10px;
        border-radius: 15px;
        background-color:  #312F2F;
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-weight: bold;
        font-size: 14px;
        color: #caadad;

        span {       
            color: white;
            font-size: 12px;
            font-weight: normal;
        }
    }
`;

export const GPTMessage = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;

    p {
        max-width: 50%;
        width: 100%;
        padding: 10px;
        border-radius: 15px;
        background-color:  #312F2F;
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-weight: bold;
        font-size: 14px;
        color: #caadad;

        span {       
            color: white;
            font-size: 12px;
            font-weight: normal;
        }
    }
`;