import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

export default {
 title: "Components/Controls/Marketrix/Button",
 component: Button,
 tags: ['autodocs'],
 size: {
    control: {
      type: 'select',
      options: ["sm", "md", "lg", "xl", "2xl"],
    },
  },
  alignItems: {
    control: {
      type: 'select',
      options: ["center","left","right","justify"],
    },
  },
  icon: {
    control: {
      type: "select",
      options: [
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
        
        // add more icon names here
      ],
    },
  
  },

 argTypes: {
   handleClick: { action: alert("click action") },
  
 }


 
};

const Template = (args) => <Button {...args} />;

export const main = Template.bind({});

main.args = {
 backgroundColor:"#7F56D9",
 label: "Button CTA",
 size:"sm",
 color: "white",
 direction: "row",
 border: "1px solid",
 borderColor:"#6941C6",
 hoverColor:"#5C3DA7",
 disabled:false,
 disabledColor:"#E9D7FE",
 focusColor:"#F4EBFF"

}


