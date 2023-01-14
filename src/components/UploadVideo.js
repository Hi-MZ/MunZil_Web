import axios from 'axios'
import React, { useState } from 'react';
import moment from 'moment'
import 'moment/locale/ko'

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
        <form onSubmit={onSubmit}>
            <input type="file" name="video" />
            <input name="title" value={title} onChange={onChangeTitle}/>     
            <button type="submit"/>       
        </form>

    )

}

export default UploadVideo
