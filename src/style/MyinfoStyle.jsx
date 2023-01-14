import styled from 'styled-components'
import Profile_pic from '../assets/profile.png'

export const Title = styled.h1`
    margin-top: 3.125rem;

    font-size: 2.125rem;
    font-weight: 600;
    color: #F5B659;

    margin-right: 15rem;
`

export const ChangeBtn = styled.button`
    border : none;    
    color: #989898;
    background-color: #FFFFFF;
    margin-top: 1rem;
`


export const ProfileSum = styled.div`
    display: flex;
    align-items: center;
`

export const Profile = styled.div`
    background-image: url(${Profile_pic});
    background-size: cover;
    width: 4rem;
    height: 4rem;
`

export const NF = styled.div`
    margin-left: 0.3rem;
`

export const Nic = styled.h3`
    margin-top: 0;
    margin-bottom: 0.1rem;
`

export const Follow = styled.span`
    
`
export const Align = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 0.5rem;
`