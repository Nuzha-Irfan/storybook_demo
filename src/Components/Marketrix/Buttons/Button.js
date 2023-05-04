import PropTypes from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faHeart,
  faStar,
  faThumbsUp,
  faCheckCircle,
  faTimesCircle,
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
  faPlusSquare,
  faMinusSquare,
  faCircleDot,
  
} from '@fortawesome/free-regular-svg-icons' ;
import { faCircle as fasCircle}from "@fortawesome/free-solid-svg-icons";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far);

function Button({
 label,
 fontSize,
 lineHeight,
 type,
 backgroundColor,
 border,
 borderColor,
 icon,
 iconMargin,
 direction = "row",
 color,
 size,
 
 handleClick,
 disabled = false,
 disabledColor,
 gap,
 paddingLeft, paddingRight, paddingBottom, paddingTop,
 hoverColor,focusColor,
 alignItems,
 iconPosition = "leading",
}) {
  
    const iconMap = {
     

      circle: faCircle,
      heart: faHeart,
      star: faStar,
      "thumbs-up": faThumbsUp,
      check: faCheckCircle,
      times: faTimesCircle,
      "arrow-right": faArrowAltCircleRight,
      "arrow-left": faArrowAltCircleLeft,
      plus: faPlusSquare,
      minus: faMinusSquare,
      "circle-Dot": fasCircle,
    };


   

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);


    if (type==="Primary"){
      borderColor=" #7F56D9";
      hoverColor="#6941C6";
      color= "white";
      disabledColor="#E9D7FE";
      backgroundColor="#7F56D9";
    }
    else if(type === "Secondary") {
      borderColor="#F9F5FF";
      hoverColor="#F4EBFF";
      disabledColor="#FCFAFF";
      backgroundColor="#F9F5FF";
      color= "#6941C6"
    }
    else if(type === "Secondary Gray") {
      borderColor="#D0D5DD";
      hoverColor="#F9FAFB";
      disabledColor="#FCFAFF";
      backgroundColor="#FFFFFF";
      color= "#344054"
      focusColor="#F2F4F7";
    }
    else if(type === "Tertiary") {
      borderColor= "none";
      border="none";
      hoverColor="#F9F5FF";
      disabledColor="none";
      backgroundColor="none";
      color= "#6941C6"
      focusColor="none";
    }
  
  




    if (size === "sm") {
      paddingLeft = 14;
      paddingRight = 14;
      paddingBottom = 8;
      paddingTop = 8;
      fontSize="14px";
      lineHeight="20px";
     
      
    } else if (size === "md") {
      paddingLeft = 16;
      paddingRight = 16;
      paddingBottom = 10;
      paddingTop = 10;
      fontSize="14px";
      lineHeight="20px";
     
    } else if (size === "lg") {
      paddingLeft = 18;
      paddingRight = 18;
      paddingBottom = 10;
      paddingTop = 10;
      fontSize="16px";
      lineHeight="24px";
   
    } else if (size === "xl") {
      paddingLeft = 20;
      paddingRight = 20;
      paddingBottom = 12;
      paddingTop = 12;
      fontSize="16px";
      lineHeight="24px";
     
    } else if (size === "2xl") {
      paddingLeft = 28;
      paddingRight = 28;
      paddingBottom = 16;
      paddingTop = 16;
      fontSize="18px";
      lineHeight="28px";
      gap="12px";
     
    }
    



 const style = {
   backgroundColor :disabled ? disabledColor : isHovered ? hoverColor : backgroundColor,
   paddingLeft,
   paddingTop,
   paddingRight,
   type,
   paddingBottom,
   fontSize :`${fontSize}px`,
   lineHeight:`${lineHeight}px`,
   size,
   icon,
   display: "flex",
   flexDirection: direction,
   alignItems,
  
   justifyContent:
   direction === "row"
     ? iconPosition === "leading"
       ? "flex-start"
       : "flex-end"
     : "center",
   gap:"8px",
   border,
   borderColor :disabled ? disabledColor :borderColor,
   borderRadius: "8px",
   color,
   cursor: disabled ? "default" : "pointer",
   opacity: disabled ? 0.6 : 1,
   boxShadow: isFocused && !disabled ? ` 0px 0px 0px 4px ${focusColor}` : "none",
   lineHeight: "1em",
   textAlign:"center"
 };


 return (
   <button onClick={disabled ? null :handleClick} style={style}
   className="marketrix-button" 
   onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={disabled ? -1 : 0}
      disabled={disabled}
   >

      {iconPosition === "leading" &&  icon && <FontAwesomeIcon icon={iconMap[icon]} iconMargin={8} />}
      {label}
      {iconPosition === "trailing"  && icon && <FontAwesomeIcon icon={iconMap[icon]} iconMargin={8} />}
   </button>
 );
}

Button.propTypes = {
 label: PropTypes.string,
 direction: PropTypes.oneOf(["row", "column"]),
 backgroundColor: PropTypes.string,
 iconPosition:PropTypes.oneOf(["leading","trailing","none"]),
 size:PropTypes.oneOf(["sm","md","lg","xl","2xl","custom"]),
 color: PropTypes.string,
 paddingRight:PropTypes.number,
 paddingLeft:PropTypes.number,
 paddingBottom:PropTypes.number,
 paddingTop:PropTypes.number,
 handleClick: PropTypes.func,
 border:PropTypes.string,
 borderColor:PropTypes.string,
 hoverColor: PropTypes.string,
 disabled: PropTypes.bool,
 fontSize:PropTypes.string,
 lineHeight:PropTypes.string,
 disabledColor: PropTypes.string,
 focusColor: PropTypes.string,
//  textAlign:PropTypes.oneOf(["left","right","center","justify"]),
 alignItems:PropTypes.oneOf(["flex-start","center","flex-end","baseline"]),
 icon: PropTypes.oneOf([
  "none",
  "circle",
  "heart",
  "star",
  "thumbs-up",
  "check",
  "times",
  "arrow-right",
  "arrow-left",
  "plus",
  "minus",
  "circle-Dot",
]),
 type:PropTypes.oneOf(["Primary","Secondary","Secondary Gray","Tertiary","custom"])
};

export default Button;

