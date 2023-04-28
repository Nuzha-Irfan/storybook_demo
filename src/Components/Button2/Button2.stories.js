import Button from "./Button2";
import { Center  } from "../Center/Center";
export default {
 title: "Components/Controls/Button",
 component: Button,
 argTypes: {
   handleClick: { action: alert("click action") },
 },
 
};

const Template = (args) => <Button {...args} />;

export const Green = Template.bind({});

Green.args = {
 backgroundColor: "green",
 label: "Middle Green button",
 size: "md",
 color: "black",
 padding : 3,


}
export const Pink = Template.bind({});

Pink.args = {
 backgroundColor: "pink",
 label: "Middle Pink Button",
 color: "blue",
 size: "md",
};


export const Small = Template.bind({});

Small.args = {
 backgroundColor: "blue",
 label: "Small button",
 size: "sm",
 color: "white",
};

export const Large = Template.bind({});

Large.args = {
 label: "Very very very large button",
 size: "lg",
 color: "black",
 backgroundColor: "red",
};