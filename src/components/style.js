import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient( #e0e7f7 40% , #feb800 40%);

    display: flex;
    justify-content: center;
    align-items: center;

    animation:fade-in .5s cubic-bezier(.39,.575,.565,1.000) both;

    @keyframes fade-in {
    0% {transform:translateY(20px); opacity:0}
    100% {transform:translateY(0); opacity:1}
    };
`;

export const CalculatorWrapper = styled.div`
    height: 30rem;
    width: 22rem;
 
    background: rgba( 3, 3, 3, 0.9 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 9px );   
    -webkit-backdrop-filter: blur( 9px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    display: grid;
    justify-content: center;

    transition: 0.8s;

    &:hover{
    transform: scale(1.006);
    }

    @media only screen and (min-width: 1024px) {
        width: 30rem;
        height: 40rem;
    }
`;

export const Calc = styled.div`
    width: 100%;
    height: 3rem;
    color: #fff;
    font-size: 18px;
    opacity: 0.7;
    padding-right: 1rem;

    display: flex;
    align-items: flex-end;
    justify-content:flex-end ;

    @media only screen and (min-width: 1024px) {
        width: 100%;
        height: 4rem;
        font-size: 22px;
        padding-right: 2rem;

    }
`;

export const ResultBox = styled.div`
    width: 100%;
    height: 1rem;
    color: white;
    font-size: 24px;
    font-weight: bolder;
    padding-right: 1rem;

    display: flex;
    align-items: center;
    justify-content:flex-end ;

    @media only screen and (min-width: 1024px) {
        margin: 0;
        width: 100%;
        height: 2rem;
        font-size: 32px;
        padding-right: 2rem;

    }
`;

export const KeyboardContainer = styled.div`
    width: 20rem;
    height: 18rem;
    color: white;
    padding: 1rem ;

    display: grid; 
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    align-content: center;
    justify-self: center;

    @media only screen and (min-width: 1024px) {
        width: 25rem;
        height: 20rem;
    }
`;

export const Buttons = styled.button`
    width: 3rem;
    height: 3rem;
    color: white;
    background-color: transparent;
    font-size: 18px;
    border-radius: 50%;
    opacity: 0.6;
    cursor: pointer;

    transition: 0.3s;

    &:hover {
    opacity: 1;
    transform: scale(1.2);
    border: 1px solid rgba(255, 255, 255, 0.25)
  }    

  @media only screen and (min-width: 1024px) {
        width: 4rem;
        height: 4rem;
        font-size: 22px;

    }
`;

export const BtnHidden = styled(Buttons)`
    cursor: default;

    &:hover{
    opacity: 0;
    border: none
  }    
`;

export const LineContainer = styled.div`
    width: 22rem;
    height: 1rem;

    display: flex;
    align-items: flex-end;
    justify-content:flex-end ;

    @media only screen and (min-width: 1024px) {
        width: 30rem;
    }

`;

export const LineStl = styled.div`
    width: 11rem;
    height: 2px;
    background-color: #feb800;
    border-top-left-radius: 1px;
    border-bottom-left-radius: 1px;

    animation-name: pulseBox;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    border: 0px;

    @media only screen and (min-width: 1024px) {
        width: 16rem;
        height: 3px;

    }

    @keyframes pulseBox {
        0% {box-shadow: 0px 0px 10px 0px rgba(254, 184, 0, 0.6);}
        100% {box-shadow: 0px 0px 18px 0px rgba(254, 184, 0, 0.9);}
    }

`;