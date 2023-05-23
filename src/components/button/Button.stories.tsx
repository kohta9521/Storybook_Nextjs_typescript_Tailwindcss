// components/button/Button.stories.tsx
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary Button',
  className: 'bg-blue-600 text-white p-2',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary Button',
  className: 'bg-gray-300 text-black p-2',
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Disabled Button',
  className: 'bg-gray-200 text-gray-600 p-2 cursor-not-allowed',
}