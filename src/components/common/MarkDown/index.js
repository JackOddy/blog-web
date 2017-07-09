import React from 'react';
import styled, {injectGlobal} from 'styled-components';

export const h1 = styled.h1`
  padding: 5px;
  color: rgb(39,40,34);
  font-family: nunito-extralight;
  font-weight: 800;
`;
export const h2 = styled.h2`
  padding: 5px;
  color: rgb(39,40,34);
  font-family: nunito-extralight;
  font-weight: 100;
`;
export const h3 = styled.h3`
  padding: 5px;
  color: rgb(39,40,34);
  font-family: nunito-extralight;
  font-weight: 100;
`;
export const h4 = styled.h4`
  padding: 5px;
  color: rgb(39,40,34);
  font-family: nunito-extralight;
  font-weight: 100;
`;
export const h5 = styled.h5`
  padding: 5px;
  color: rgb(39,40,34);
  font-family: nunito-extralight;
  font-weight: 100;
`;
export const h6 = styled.h6`
  padding: 5px;
  color: rgb(39,40,34);
  font-family: nunito-extralight;
  font-weight: 100;
`;
export const hr = styled.hr`
  width: 90%;
  border: 1px solid rgb(39,40,34);
`;
export const p = styled.p`
  color: rgb(39,40,34);
  font-family: nunito-extralight;
  font-weight: 100;
`;
export const li = styled.li`
  color: rgb(39,40,34);
  font-family: nunito-extralight;
  font-weight: 100;
`;

injectGlobal`
   pre{
       background-color: rgb(39,40,34);
       padding: 20px;
       color: white;
   }
`;
export const code = styled.code`
  font-family: 'monaco';
  font-size: small;
  background-color: rgb(39,40,34);
  color: #66d9ef;
  padding: 0px 2px 1px 2px;
`;
export const codespan = styled.span`
`;
export const a = styled.a`
  position: relative;
  color: rgb(39,40,34);
  font-weight: bold;
  text-decoration: none;
  font-style: italic;
  &:after{
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    left: 0;
    bottom: 2px;
    border-bottom: solid 2px #66d9ef;
    z-index: -1;
  }
`;
