import React from 'react'
import Input from './Input'

export default {
  title: 'Form/Input',
  component: Input,
  tags: ['autodocs'],
}

export const Small = () => <Input size='small' placeholder='Small size' />
export const Medium = () => <Input size='medium' placeholder='Medium size' />
export const Large = () => <Input size='large' placeholder='Large size' />

Small.storyName = 'Small Input'
Medium.storyName= 'Medium Input'
Large.storyName="Large Input"