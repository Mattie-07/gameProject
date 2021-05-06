import styled from 'styled-components'

export const QuestionContainer = styled.div`
    color:#fff;
    background:${({darkBg})=> (darkBg ? '#0c0c0c': '#f9f9f9')}
    ;
    @media screen and (max-width:768px){
        padding:100px 0;
    }
`
export const QuestionWrapper = styled.div`
    display:grid;
    z-index:1;
    height:860px;
    width:100%;
    max-width:1100px;
    margin-right:auto;
    margin-left:auto;
    padding:0 24px;
    justify-content:center;
`


export const QuestionRow = styled.div`
    display:grid;
    grid-auto-columns:minmax(auto,1fr);
    align-items:center;
    grid-template-areas:${({videoStart}) =>(videoStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width:768px){
        grid-template-areas:${({videoStart}) =>(videoStart ? `'col1 'col2` : `'col1 col1' 'col2 col2'`)}
    }
`
export const VideoSide = styled.video`
    width:80%;
    height:80%;
    --o-object-fit:cover;
    object-fit:cover;
    background-attachment: fixed;
    background:#232a34;
`

export const Column1 = styled.div`
    margin-bottom:15px;
    padding: 84px 15px;
    grid-area:col1;
`
export const Column2 = styled.div`
    margin-bottom:15px;
    padding: 84px 15px;
    grid-area:col2;
`

export const VideoWrap = styled.div`
    max-width:555px;
    padding-top:0;
    padding-bottom:60px;
`


export const TextWrapper = styled.div`
    max-width:540px;
    padding-top:0;
    padding-bottom:60px;
`

export const QuestionText = styled.p`
    color:#9301bf;
    font-size:16px;
    line-height:16px;
    font-weight:700;
    letter-spacing:1.4px;
    text-transform:uppercase;
    margin-bottom:16px;
    margin-top:50px;
`

export const Heading = styled.h1`
    color:#000;
    margin-bottom:24px;
    font-size:48px;
    line-height:1.1;
    font-weight:600;
    color:${({lightText}) => (lightText ? `#f7f8fa` : '#010606')};

    @media screen and (max-width: 480px){
        font-size:32px;
    }
`

export const Subtitle = styled.p`
    max-width:440px;
    margin-bottom:35px;
    font-size:18px;
    line-height:24px;
    color:${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const ButtonWrap = styled.div`
    display:flex;
    justify-content:flex-start;
    padding:20px;
`

export const Imgwrap = styled.div`
    max-width:555px;
    height:100%;
`

export const Img = styled.img`
    width:100%;
    margin:0 0 10px 0;
    padding-right:0;

`

// export const QuestionContainer = styled.div`
//     background:#0c0c0c;
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     padding: 0 30px;
//     height: 800px;
//     z-index:1;

// export const HeroSide = styled.div`
//     position:absolute;
//     top:15%;
//     bottom:0;
//     right:0;
//     left:0;
//     width:40%;
//     height:80%;
//     overflow:hidden;
// ` 
//     :before{
//         content:'';
//         position:absolute;
//         top:0;
//         left:0;
//         right:0;
//         bottom:0;
//         background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 100%);
//         z-index:2;
//     }
// `

// export const HeroSide = styled.div`
//     position:absolute;
//     top:15%;
//     bottom:0;
//     right:0;
//     left:0;
//     width:40%;
//     height:80%;
//     overflow:hidden;
// ` 

