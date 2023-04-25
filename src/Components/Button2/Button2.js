import PropTypes from "prop-types";

function Button({
 label,
 backgroundColor = "red",
 color = "black",
 size = "md",
 padding = 2,
 margin=1,
 handleClick,
}) {
 let scale = 1;
 if (size === "sm") scale = 0.5;
 if (size === "lg") scale = 2;
 if (size === "vlg") scale = 5;
 const style = {
   backgroundColor,
   padding,
   margin,
   //padding: `${scale * 0.5}rem ${scale * 1}rem`,
   border: "2px solid black",
   borderRadius: "25px",
   color,
 };

 return (
   <button onClick={handleClick} style={style}>
     {label}
   </button>
 );
}

Button.propTypes = {
 label: PropTypes.string,
 
 backgroundColor: PropTypes.string,
 size: PropTypes.oneOf(["sm", "md", "lg","vlg"]),
 color: PropTypes.oneOf(["blue", "white", "black"]),
 padding:PropTypes.number,
 margin:PropTypes.number,
 handleClick: PropTypes.func,
};

export default Button;