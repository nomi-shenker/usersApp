import { useEffect, useRef, useState } from "react";
import { IconButton , DialogTitle, Button} from '@mui/material';
import {Close} from  '@mui/icons-material';
import { TextareaAutosize } from '@mui/base';
import { StyledDialog , Title, DialogContent, ButtonWrapper, SuccessWrapper} from "./PostsPopUpStyle";



export const PostsPopUp=(props: any)=>{

  const [success, setSuccess] = useState<boolean>(false);
  const timer = useRef<any>()

  useEffect(()=>{
      setSuccess(false);
      return () => {
        clearTimeout(timer.current);
      };
  }, [props.open]);


  const onAdd =() =>{
    setSuccess(true);
     timer.current = setTimeout(()=>{
      setSuccess(false);
      props.onClose();
    }, 3000);
    
  }
    return(
        <StyledDialog open={props.open}>
          <DialogTitle>
            <Title>
             <h1>Add Post: </h1>
             <IconButton aria-label="close" onClick={props.onClose}>
             <Close />
           </IconButton>
           </Title>
           </DialogTitle>
           <> {success ? <SuccessWrapper><p>Your post has been successfully added!</p></SuccessWrapper>: 
           <DialogContent>
             <p>Title:</p>
            <TextareaAutosize />
            <p>Body:</p>
            <TextareaAutosize />
            <ButtonWrapper>
             <Button variant="outlined" onClick={onAdd}>Submit</Button>
          </ButtonWrapper>
          </DialogContent>}
          </>
        </StyledDialog>
    )
}