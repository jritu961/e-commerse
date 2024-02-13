import styled from 'styled-components';


export const NavbarContainer = styled.div`
padding: 0%;
margin:0%;
width:100%;
    height: 66px;
        background-color:#2874f0;
/* display: flex;
justify-content: center;
background-color: #fff;
flex-direction: column; */
`

export const NavbarDiv=styled.div`
max-width:100%;  
display:flex;
gap:25px;
font-size:17px;
padding:11px 20px 5px 20px;
margin:0px 50px 0px 50px;
color:#fff;
/* color:#080808; */
justify-content:space-between;
@media (max-width:650px) {
    font-size:0px;
    gap:5px;
  }
`
export const NavbarHeadingDiv=styled.div`
display:flex;
font-family: Arial, Helvetica, sans-serif;
flex-direction: column;
font-size:16px;
gap:5px;



`
export const NavbarSeachDiv=styled.div`
display:flex;
height: 30px;
width: 50%;
background-color: #cccccc8c;
border-radius:2px solid red;
border-radius:2px;
font-size:20px;
font-family:Arial, Helvetica, sans-serif;
align-items:center;
padding-left :15px;
gap:5px;
/* border: 0;
    outline: 0 none;
    font-size: 17px; */
    @media (max-width:817px) {
    font-size:13px;
    gap:5px;
  }    
  @media (max-width:817px) {
    font-size:13px;
    gap:5px;
  }    

`
export const NavbarLoginDiv=styled.div`
display:flex;
gap:5px;


`
export const NavbarCartDiv=styled.div`
display:flex;
gap:5px;

`
export const NavbarSellerDiv=styled.div`
display:flex;
gap:5px;

`

export const NavbarSupportDiv=styled.div`


`

