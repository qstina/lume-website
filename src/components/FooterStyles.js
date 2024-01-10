import styled from "styled-components";
 
export const Box = styled.div`
    padding: 2% 2.5%;
    background: #ffa07a ;
    ;
    // position: absolute;
    bottom: 0;
    width: 95%;
 
    @media (max-width: 1000px) {
         padding: 20px 30px;
    }
`;
 
export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`;
 
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 90px;
`;
 
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(185px, 1fr)
    );
    grid-gap: 20px;
 
    @media (max-width: 1000px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
        );
    }
`;
 
export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 14px;
    text-decoration: none;
 
    &:hover {
        color: black;
        transition: 200ms ease-in;
    }

    @media (max-width: 1000px) {
        font-size: 15px;
    }
`;
 
export const Heading = styled.p`
    font-size: 20px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;

    @media (max-width: 1000px) {
        font-size: 20px;
    }
`;
