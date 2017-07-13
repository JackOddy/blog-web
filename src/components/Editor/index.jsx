import React from 'react';
import styled from 'styled-components';

const MdTextArea = styled.textarea`
  flex: 1;
  resize: none;
  border: none;
  border-right: solid;
  font-family: nunito-extralight;
  font-size: initial;
  padding-left: 10px;
`;

const MdPreview = styled.div`
  height: 100%;
  flex: 1;
  background-color: white;
  padding-left: 10px;
`;

const EditorWrap = styled.div`
  height: 100%;
  display: flex;
`;

export default ({raw, parsed}) => (
  <EditorWrap>
    <MdTextArea value={raw}/>
    <MdPreview>
      {parsed}
    </MdPreview>
  </EditorWrap>
);
