import { Meta, StoryFn } from "@storybook/react"
import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import ImagePreview from "."
import Dropzone from 'components/molecules/Dropzone'

export default {
    title: 'Molecules/ImagePreview'
} as Meta<typeof ImagePreview>

const Template: StoryFn<typeof ImagePreview> = (args) => <ImagePreview {...args}/>

export const WithDropzon = Template.bind({})
WithDropzon.args = {}

