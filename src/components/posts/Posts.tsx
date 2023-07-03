import React, { useEffect, useState } from 'react';
import { useLocation , Link} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { PostsPopUp } from '../posts-pop-up/PostsPopUp';
import { Title, Txt, Footer, AddButton, PostsWrapper , Header} from './PostsStyle';

interface PostModel{
    title: string;
    body: string;
    id:number;
}

export const Posts =( )=>{
  

    const [userPosts, setUserPosts] = useState<PostModel[]>([]);
    const [openPopUp, setOpenPopUp] = useState<boolean>(false);

    const location = useLocation();

    useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${location.state.userId}`)
        .then(response=>response.json())
        .then(data=>{
          setUserPosts(data);
        });
      }
   ,[location.state.userId]);
   
   const onAddPost =()=>{
     setOpenPopUp(true)
   }


    return(<PostsWrapper>
        <Header>
       <Link to="/"><ArrowBackIcon/></Link>
       </Header>
          <ul>{userPosts.map((post: PostModel)=> {
             return <li key={post.id}>
              <Title>{post.title}</Title>
              <Txt>{post.body}</Txt>
              </li>})}</ul>
              
              <Footer>
               <AddButton variant="outlined" onClick={onAddPost}>Add Post</AddButton>
              </Footer>
         <PostsPopUp open={openPopUp} 
                     userId={location.state.userId}
                     onClose={()=>{setOpenPopUp(false);}}/>
         

        </PostsWrapper>
    )


}