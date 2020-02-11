import styled from "styled-components";

export const Container = styled.div` 
    margin-top: 0px; 
    display: block;
    align-items: center;
    justify-content: center;
    height: 60px;
    background-color: #D7B29D;

ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    
}
li {
    float: left;
    border-right:1px solid #bbb;
    text-align: center;
    padding: 18px 18px;
}
.brand{
    font-family: arial black;
    font-variant: petite-caps;
}
li a {
    display: block; 
    color: white;
    font-family: arial;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
}
.lista{
    padding-left: 100px;
}
.user{
    float: right;
    padding-right: 50px;
    font-weight: 700;
    padding-top: 10px;
    padding-bottom: 2px;
    
}
.btnSair{
    height: 15px;
    width: 15px;
}
`;

export const User = styled.div`
    font-size: 20px;
    font-weight: bolder;

`;
