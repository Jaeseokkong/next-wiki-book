import { Meta, StoryFn } from '@storybook/react'
import SigninForm from './index'

export default {
    title: 'organisms/SigninForm',
    argTypes: {
        onSignin: {
            description: '로그인 버튼을 클릭했을 때의 이벤트 핸들러',
            table: {
                type: { summary: 'function' }
            }
        }
    }
} as Meta<typeof SigninForm>

const Template: StoryFn<typeof SigninForm> = (args) => <SigninForm {...args} />

export const Form = Template.bind({})