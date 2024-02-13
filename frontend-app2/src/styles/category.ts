import styled from "styled-components";

export const CategoryContainer = styled.div`
display: flex;
justify-content:space-around;
align-items:center;
max-width:80%;
height:160px;
padding:10px;
gap:10px;
background-color:#fff;
@media (max-width: "1360px"){
    /* background-color:none; */
img{
    width: 100px; /* Adjust the width as needed */
    height: auto; /* Maintain aspect ratio */
}
}
`