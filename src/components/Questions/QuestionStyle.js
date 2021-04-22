import styled from 'styled-components'

// export const QuestionContainer = styled.div`
//     color:#fff;
//     background:${({darkBg})=>(darkBg ? '#0c0c0c': '#f9f9f9')}
//     ;
//     @media screen and (max-width:768px){
//         padding:100px 0;
//     }
// `
// export const QuestionWrapper = styled.div`
//     display:grid;
//     index:1;

// `



export const QuestionContainer = styled.div`
    background:#0c0c0c;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 0 30px;
    height: 800px;
    z-index:1;

    :before{
        content:'';
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 100%);
        z-index:2;
    }
`

export const HeroSide = styled.div`
    position:absolute;
    top:15%;
    bottom:0;
    right:0;
    left:0;
    width:40%;
    height:80%;
    overflow:hidden;
` 

export const VideoSide = styled.video`
    width:100%;
    height:100%;
    --o-object-fit:cover;
    object-fit:cover;
    background-attachment: fixed;
    background:#232a34;
`
