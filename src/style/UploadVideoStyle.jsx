import styled from 'styled-components'
import UploadImg from '../assets/upload.png'

export const Title = styled.h1`
    font-size: 2.125rem;
    color: #F5B659;
    margin-bottom: 1.563rem;
    margin-left: 1.813rem;
    margin-top: 3.688rem;
`

export const Question = styled.div`
    border: solid ;
    border-radius: 2rem;
    width: 22.313rem;
    height: 5.125rem;
    background-color: #F5B659;
    color: #FFFFFF;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1.063rem;
    margin-right: 1rem;
`

export const UploadDiv = styled.div`
    display: flex;
    align-items: center;

    padding-top: 2.25rem;
    margin-bottom: 15.438rem;
`

export const UploadBtn = styled.div`
    border: solid white 0.375rem;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    box-shadow: 0rem 0.2rem 1rem rgba(1,1,1,0.2);
    background-image: url(${UploadImg});
    background-size: cover;

    margin-left: 1.063rem;
    margin-right: 1.25rem;
`

export const Zemok = styled.h1`
    font-size: 2.125rem;
    font-weight: 600;
    margin-left: 1.063rem;
`

export const VideoTitle = styled.input`
    width: 22.313rem;
    height: 5.313rem;
    background-color: #F1F1F1;
    border: none;
    border-radius: 0.5rem;
`

export const SubmitBtn = styled.button`
    border: solid ;
    border-radius: 2rem;
    display:block;
    width: 22.313rem;
    height: 3.125rem;
    margin-top: 1.75rem;
    background-color: #FFFFFF;

    color: #F5B659;
    font-size: 1.5rem;
    font-weight: bold;
`
