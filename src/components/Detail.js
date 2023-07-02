import styled from 'styled-components';
import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import db from './firebase';

function Detail(){
 
 const { id }=useParams();
 const [detailsData,setDetailsData]=useState({});
 
 useEffect(()=>{
   db.collection('movies').doc(id)
       .get()
       .then((doc)=>{
         if(doc.exists){
           setDetailsData(doc.data());
         }else{
          console.log("doc is not available in firebase");
         }
   })
   .catch((error)=>{
       console.log(error);
    })
 },[id])
 
 return(
 <Container>
  <Background>
    <img src={detailsData.backgroundImg} alt={detailsData.title} />
  </Background>
  <ImgTitle> 
    <img src={detailsData.titleImg} alt={detailsData.title} />
  </ImgTitle>
  <ContentMeta>
    <Controls>
     <Player>
       <img src="/images/play-icon-black.png" />
       <span>PLAY</span>
     </Player> 
     <Trailer>
        <img src="/images/play-icon-white.png" />
         <span>TRAILER</span>
     </Trailer>
     <AddList>
       <span />
       <span />
     </AddList>
     <GroupMatch>
         <div>
           <img src="/images/group-icon.png" />
         </div>
     </GroupMatch>
    </Controls>
    <SubTitle>{detailsData.subTitle}</SubTitle>
    <Description>{detailsData.description}</Description>
  </ContentMeta>
 </Container>
 );
}

const Container=styled.div`
 position:relative;
 overflow-x:hidden;
 min-height:calc(180vh-258px);
 display:block;
 top:72px;
 padding: 0 calc(3.5vw + 5px);
`;

const Background=styled.div`
 position:fixed;
 left:0px;
 right:0px;
 top:0px;
 z-index:-1;
 opacity:0.8;

 img{
   width:100vw;
   height:100vh; 
   
   @media(max-width:768px){
    width:initial;
   }
 }
`;

const ImgTitle=styled.div`
 align-items:flex-end;
 display:flex;
 justify-content:flex-start;
 margin 0px auto;
 padding-bottom:24px;
 height:30vw;
 min-height:170px;
 width:100%;
 
 img{
  max-width:600px;
  min-width:200px;
  width:35vw; 
 }
`;

const ContentMeta=styled.div`
 max-width:874px;
`;

const Controls=styled.div`
 align-items:center;
 display:flex;
 flex-flow:row nowrap;
 margin:24px 0px;
 min-height:56px;
`;

const Player=styled.button`
 font-size:15px;
 display:flex;
 align-items:center;
 margin:0px 22px 0px 0px;
 padding:0px 24px;
 height:56px;
 border-radius:4px;
 cursor:pointer;
 letter-spacing:1.8px;
 text-align:center;
 border:none;
 background:rgb(249,249,249);
 color:black;
 
 img{
 width:32px;
 } 
 
 &:hover{
  background:rgb(198,198,198);
 } 

 @media(max-width:768px){
  height:45px;
  padding:0px 12px;
  font-size:12px;
  margin:0px 10px 0px 0px;

  img{
   width:25px;
  }
 }

`;

const Trailer=styled(Player)`
 background:rgba(0,0,0,0.3);
 border:1px soldi rgb(249,249,249);
 color:rgb(249,249,249);
`;

const AddList=styled.div`
 margin-right:16px;
 height:44px;
 width:44px;
 display:flex;
 justify-content:center;
 align-items:center;
 background-color:rgba(0,0,0,0.6); 
 border-radius:50%;
 border:2px solid white;
 cursor:pointer;
 
 span{
   background-color:rgb(249,249,249);
   display:inline-block; 
   
   &:first-child{
     height:2px;
     width:16px;
     transform:translate(1px,0px) rotate(0deg);
   } 
   
   &:nth-child(2){
     height:16px;
     width:2px;
     transform:translateX(-8px) rotate(0deg);
   } 
 }
`;

const GroupMatch=styled.div`
 height:44px;
 width:44px;
 border-radius:50%;
 display:flex;
 justify-content:center;
 align-items:center;
 cursor:pointer;
 background:white;
 
 div{
  height:40px;
  width:40px;
  background:rgb(0,0,0);
  border-radius:50%;
 }
 
 img{
  width:100%;
 } 
`;

const SubTitle=styled.div`
 color:rgb(249,249,249);
 font-size:15px;
 min-height:26px;
  
 @media(max-width:768px){
   font-size:12px;
 }
`;

const Description=styled.div`
 line-height:1.4;
 font-size:20px;
 padding:16px 0px;
 color:rgb(249,249,249);

  @media(max-width:768px){
   font-size:14px;
 }
`;

export default Detail;