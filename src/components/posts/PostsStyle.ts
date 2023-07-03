import styled from 'styled-components'
import {Button} from '@mui/material';



export const Title= styled.h1`
   margin: 0px;
   font-size: 26px;
`

export const PostsWrapper= styled.div`
 ul{
    line-height: 1.8rem;
 }
`

export const Header= styled.div`
display: flex;
 a{
    color:black;
 }
 svg{
    font-size: 34px;
 }
`

export const Txt= styled.p`
   margin: 0px;
`

export const Footer= styled.div`
    background-color: #b6b6b6;
    height: 4.5rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
export const AddButton= styled(Button)`
  color: black !important;
  border-color: black !important;
  font-size: 20px !important;
`
