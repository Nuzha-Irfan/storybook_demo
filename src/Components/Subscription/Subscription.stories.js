import React from 'react'
import { Primary,Secondary } from '../Button/Button.stories'
import { Large,Medium } from '../Input/Input.stories'


export default {
  title: 'Form/Subscription',
  tags: ['autodocs'],
}

export const PrimarySubscription = () => (
  <>
    <Large />
    <Primary />
  </>
)


export const SecondarySubscription = () => (
    <>
      < Medium/>
      <Secondary />
    </>
  )