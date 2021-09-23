import React from "react";
import { ContainerFather, StyleOfThePopUpBox} from '../popUpService/popUpStyle';
 
const Popup = (props) => {
  return (
    <ContainerFather onClick={props.closeThePopUp}>
      <StyleOfThePopUpBox>
        {props.content}
      </StyleOfThePopUpBox>
    </ContainerFather>
  );
};
 
export default Popup;