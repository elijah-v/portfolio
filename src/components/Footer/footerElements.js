import styled from 'styled-components'

export const FooterContainer = styled.div`
background: linear-gradient(180deg,#444,#333,#222);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
width: 100%;
bottom:0;
position: fixed;

max-height: 50px;

z-index: 5;
text-align: center;
`

export const SocialMedia = styled.div`
width: 100%;
max-width: 1000px;
color: #333;
`

export const SocialMediaWrap = styled.div`
width: 90%
max-width: 1000px;
justify-content: space-between;
align-items: center;
margin: 10px auto;
display: flex;
color: #eee;
`

export const WebsiteRights = styled.small`
margin: auto 0;
font-family: 'Ubuntu', sans-serif;
font-size: 1.5rem;
font-weight: 700;
color: #bbb;

@media screen and (max-width: 500px){
font-size: 1.1rem;
font-weight: 700;
margin: auto ;
}
`

export const SocialIcons = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
p {
    color: #bbb;
}
`

export const SocialIconLink = styled.a`
font-size: 24px;
trnasition: 1.4s ease;
:hover{
transform: scale(1.2);
}
`