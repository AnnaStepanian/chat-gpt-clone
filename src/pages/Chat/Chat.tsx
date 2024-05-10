import React, { useEffect, useRef, useState } from "react";

//styles
import * as S from './Chat.styled';
import { useNavigate } from "react-router-dom";
import { IMessage, IUserLoginResponse } from "../../constants/types";
import axios from "axios";

export const Chat: React.FC = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState<IUserLoginResponse>();
    const [userMsg, setUserMsg] = useState<string>('');
    const [messages, setMessages] = useState<IMessage[]>([])
    const messageContainerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (!localStorage.getItem('user')) navigate('/login')
    }, [])

    useEffect(() => {
        if (localStorage.getItem('user')) {
            const userData = JSON.parse(localStorage.getItem('user') ?? '');

            setUser(userData)
        }
    }, [])

    const handleChangeUserMessage = (e: React.FormEvent<HTMLInputElement>) => {
        setUserMsg(e.currentTarget.value)
    }

    const handleSendMessage = async () => {
        if (userMsg) {
            setMessages(prevState => [...prevState, {
                message: userMsg,
                type: 'user'
            }])
    
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/sendRequest?isPremium=${user?.premium}`, {
                inputText: userMsg,
            })
    
            if (response.data) {
                setMessages(prevState => [...prevState, {
                    message: response.data,
                    type: 'gpt'
                }])
            }
    
            setUserMsg('')
        }
    }

    return (
        <S.ChatContainer>
            <S.ChatWrapper>
            <S.ChatHeader>
                <S.UserInfo>
                    <S.UserName>User</S.UserName>
                    <S.UserStatus>{user?.premium ? 'Premium' : 'Free'}</S.UserStatus>
                </S.UserInfo>
            </S.ChatHeader>
            <S.ChatBody>
                <S.Messages ref={messageContainerRef}>
                    {messages.map((messageItem, index) => messageItem.type === 'user' 
                        ? <S.UserMessage key={messageItem.message + index}>
                            <p>User  <span>{messageItem.message}</span></p>
                           </S.UserMessage> 
                        : <S.GPTMessage  key={messageItem.message + index}>
                            <p>GPT <span>{messageItem.message}</span></p>
                        </S.GPTMessage>
                    )}
                </S.Messages>
                <S.Controls>
                    <S.ChatMessageInput value={userMsg} type="text" placeholder="Message..." onChange={handleChangeUserMessage}/>
                    <S.SubmitMessageBtn type="button" onClick={handleSendMessage}>Send</S.SubmitMessageBtn>
                </S.Controls>
            </S.ChatBody>
            </S.ChatWrapper>
        </S.ChatContainer>
    );
}