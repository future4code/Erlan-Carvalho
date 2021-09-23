import Styled from 'styled-components';

export const ContainerFather = Styled.div`
 position: fixed;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  `

export const StyleOfThePopUpBox = Styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  height: auto;
  max-height: 57vh;
  margin-top: calc(100vh - 80vh - 20px);
  border-radius: 4px;
  padding: 20px;
  overflow: auto;`
