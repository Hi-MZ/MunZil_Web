import axios from 'axios'
import React, { useState } from 'react';
import moment from 'moment'
import 'moment/locale/ko'
import * as S from '../style/UploadVideoStyle'

//닉네임(또는 아이디), 오늘 질문 받기
const UploadVideo = ({id,question}) => {
    const [title,setTitle] = useState()
    const nowDate = moment().format("YYYY-MM-DD")
    const nowTime = moment().format("YYYY-MM-DD hh:mm:ss")

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onSubmit = () => {
        const data = {
            id,
            title,
            //video
            nowDate,
            nowTime,
            question
        }

        // axios.post("link",data)

    }

    return(
        <>
        <S.Title>영상 업로드</S.Title>
        <S.Question>오늘 질문?</S.Question>
        <form onSubmit={onSubmit}>
            <S.UploadDiv>
                <S.UploadBtn></S.UploadBtn>
                <input type="file" name="video" />
            </S.UploadDiv>
            <S.Zemok>제목</S.Zemok>
            <S.VideoTitle name="title" value={title} onChange={onChangeTitle} placeholder='영상 제목 작성'/>     
            <S.SubmitBtn type="submit">게시물 업로드</S.SubmitBtn>       
        </form>
        </>
    )
}

export default UploadVideo
