import styled from '@emotion/styled';

export const MainContainer = styled.div`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @media screen and (min-width: 320px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 75px;
    padding-right: 75px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    padding-left: 70px;
    padding-right: 70px;
  }
`;

export const Container = styled.div`
  // width: 320px;
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 40px 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;

   @media screen and (min-width: 768px) {
    width: 400px;
    
  }
`;

export const Title = styled.h2`
  display: block;
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  //text-transform: uppercase;
  margin-bottom: 20px;
`;

export const MainTitle = styled.h1`
  display: block;
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  margin-top:80px;
  //text-transform: uppercase;
  
`;

export const SectionTitle = styled.h3`
  display: block;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  // text-transform: uppercase;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const Choice = styled.p`
margin-top: 14px;
font-size: 14px;
text-decoration: underline;
//   display:flex;
// justify-content: flex-end;
`;
