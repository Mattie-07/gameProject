import styled from 'styled-components';

export const GamesContainer = styled.div`
    color:#000;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:#010606;

    @media screen and (max-width:768px){
        height:1100px;
    }

    @media screen and (max-width:480px){
        height:1300px;
    }
`
export const GamesWrapper = styled.div`
    max-width: 1000px;
    margin:0 auto;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    align-items:center;
    grid-gap:25px;
    padding:100px 50px;
`
export const GameCard = styled.div`
    background:#fff;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    border-radius:10px;
    max-height:340px;
    padding:30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition:all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor:pointer;
    }
`
export const GamesIcon = styled.img`
    height:100px;
    width:100px;
    margin-bottom:10px;
`

export const GameH1 = styled.h1`
    font-size:2.5rem;
    color:#000;
    margin-bottom:64px;

    @media screen and (max-width:480px){
        font-size:2rem;
    }
`

export const GameH2 = styled.h2`
    font-size:1rem;
    margin-bottom:10px;
`

export const GamesPara = styled.p`
    font-size:.5rem;
    text-align:center;
    `

