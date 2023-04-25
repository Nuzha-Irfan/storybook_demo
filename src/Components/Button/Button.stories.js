import React, { Children } from "react";
import Button from "./Button";
import {action,actions} from '@storybook/addon-actions';
import { DayPicker } from 'react-day-picker';
export default {
    title:'Form/control/Button',
    component:Button,
    tags: ['autodocs'],
    argTypes: {
      variant: {
        options: ['primary', 'secondary'],
        control: { type: 'radio' },
      }
    
    },
    decorators: [
        (Story) => (
          <div style={{ margin: '3em' , border :'2px', borderBlockColor:'wheat' }}>
            
            {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
            <Story />
          </div>
        ),
      ],
      
   
}

export const Primary = (args) => <Button {...args} onClick={action('click Handler')} variant="primary">Primary</Button>

export const Secondary = () => <Button {...actions('onClick','onMouseOver')} variant="secondary">Secondary</Button>
export const Success = () => <Button variant="success">Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>

const Template = args => <Button{...args}/>
export const PrimaryA = Template.bind({})

PrimaryA.args = ({
   
    variant: "primary",
    children : "Primary Args",
    variantColor: "blue",
    size: "md",
})

export const SecondaryA = Template.bind({})

SecondaryA.args = ({
    variant :'secondary',
    children : 'secondary Args'
})