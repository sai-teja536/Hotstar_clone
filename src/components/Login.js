import styled from 'styled-components';

function Login(){
return(
 <Container>
   <Content>
    <CT>
       <CTImageOne src="./images/cta-logo-one.svg" alt="" />
       <SignUp>GET ALL THERE</SignUp>
       <Describe>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 01/02/23, the price of Disney+ and the Disney Bundle will increase by $2.</Describe>
       <CTImageTwo src="./images/cta-logo-two.png" />
    </CT>
    <BGimage />
   </Content>
 </Container>
);
}

const Container=styled.section`
overflow:hidden;
display:flex;
height:100vh;
text-align:center;
flex-direction:column;
`;

const Content=styled.div`
width:100%;
display:flex;
flex-direction:column;
box-sizing:border-box;
min-height:100vh;
position:relative;
justify-content:center;
align-items:center;
height:100%;
padding:80px 40px;
`;

const BGimage=styled.div`
height:100%;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
background-image:url("/images/login-background.jpg");
position:absolute;
top:0;
right:0;
left:0;
z-index:-1;
`;

const CT=styled.div`
margin-bottom:2px;
max-width:650px; 
flex-wrap:wrap;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center; 
margin-top:0;
margin-right:auto;
margin-left:auto;
width:100%;
`;

const CTImageOne=styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:block;
width:100%;
`;

const SignUp=styled.a`
color:#ffffff;
font-weight:bold;
letter-spacing:1.5px;
background-color:#0063e5;
width:100%;
margin-bottom:12px;
padding:16px 0;
font-size:18px;
border:2px solid transparent;
border-radius:4.5px;
&:hover{
background-color:#0483ee;
}
`;

const Describe=styled.p`
color:hsla(0,0%,95%,1);
letter-spacing:1.5px;
font-size:11px;
margin:0 0 24px;
line-height:1.5;
`;

const CTImageTwo=styled.img`
max-width:600px;
width:100%;
margin-bottom:20px;
`;

export default Login;