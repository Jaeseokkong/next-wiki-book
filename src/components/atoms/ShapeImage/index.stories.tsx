import { Meta, StoryFn } from '@storybook/react'
import ShapeImage from './index'

export default {
    title: 'Atoms/ShapeImage',
    argTypes: {
        shape: {
            options: ['circle', 'square'],
            control: { type: 'radio' },
            defaultValue: 'square',
            description: '이미지 형태',
            table: {
                type: { summary: 'circle | square' },
                defaultValue: { summary: 'square' }
            }
        },
        src: {
            control: { type: 'text' },
            description: '이미지 URL',
            table : {
                type: { summary: 'string' }
            }
        },
        width: {
            control: { type: 'number' },
            description: '너비',
            defaultValue: 320,
            table: {
                type: { summary: 'number' }
            }
        },
        height: {
            control: { type: 'number' },
            description: '높이',
            defaultValue: 320,
            table: {
                type: { summary: 'number' }
            }
        }
    }
} as Meta<typeof ShapeImage>

const Template: StoryFn<typeof ShapeImage> = (args) => <ShapeImage {...args} />

export const Circle = Template.bind({})
Circle.args = { src: '/images/sample/1.jpg', shape: 'circle', width: 320, height: 320 }

export const Square = Template.bind({})
Square.args = { src: '/images/sample/1.jpg', shape: 'square', width: 320, height: 320 } 