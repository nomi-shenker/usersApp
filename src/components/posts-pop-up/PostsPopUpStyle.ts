import styled from 'styled-components'
import {Dialog} from '@mui/material';

export const StyledDialog = styled(Dialog)`
   .MuiPaper-root{
    min-height: 500px; 
     min-width: 500px;
     background-color: #b6b6b6;
    }
   }
   h2{
    background-color: white;
   }
   textarea{
    height: 73px !important;
    width: 100%;
   }
  
`

export const SuccessWrapper = styled.div`
justify-content: center;
display: flex;
margin: 90px;
font-size: 24px;

`

export const Title = styled.div`
display: flex;
justify-content: space-between;
.MuiButtonBase-root:hover{
    background: none !important;
}
h1{
    font-size: 24px;
}
`

export const DialogContent = styled.div`
margin: 0px 50px;
p{
    font-size: 20px;
    font-weight: bold;
}
`

export const ButtonWrapper = styled.div`
 display:flex;
 justify-content: center;
 button{
    min-height: 29px;
    font-size: 21px;
    color: black;
    border-color: black;
    margin-top: 30px;
 }
`
