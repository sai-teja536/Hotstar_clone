import styled from 'styled-components';
import ImgSlider from './ImgSlider.js'; 
import Viewers from './Viewers.js';
import Recommended from './Recommended.js';
import NewDisney from './NewDisney.js';
import Original from './Original.js';
import Trending from './Trending.js';
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import db from './firebase';
import {setMovies} from '../features/movie/movieSlice';
import {selectUserName} from '../features/user/userSlice';

function Home(){
 const dispatch=useDispatch(); 
 const userName=useSelector(selectUserName);
 let recommends=[];
 let newDisneys=[];
 let originals=[];
 let trending=[];

 useEffect(()=>{
 db.collection('movies').onSnapshot((snap)=>{snap.docs.map((temp)=>{
     switch(temp.data().type){
        case "recommend":
           recommends=[...recommends,{id:temp.id,...temp.data()}];
           break;
        case "new":
           newDisneys=[...newDisneys,{id:temp.id,...temp.data()}];
           break; 
        case "original":
           originals=[...originals,{id:temp.id,...temp.data()}];
           break;
        case "trending":
           trending=[...trending,{id:temp.id,...temp.data()}];
           break;
     }
  });
  
 dispatch(
  setMovies({
   recommended:recommends,
   newDisney:newDisneys,
   original:originals,
   trending:trending,
  })
 );
 });
 },[userName])

 return(
 <Container>
   <ImgSlider /> 
   <Viewers />  
   <Recommended />
   <NewDisney />
   <Original />
   <Trending />
 </Container>
 );
}

const Container=styled.main`
 position:relative;
 min-height:calc(100vh - 250px);
 top:72px;
 display:block;
 overflow-x:hidden;
 padding:0 calc(3.5vw + 5px);

 &:after{
  background:url("/images/home-background.png") center center / cover no-repeat fixed;
  content:"";
  position:absolute;
  inset:0px;
  opacity:1;
  z-index:-1;
 }
`;

export default Home;