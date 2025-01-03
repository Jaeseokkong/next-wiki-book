import React, { useCallback, useMemo } from 'react'
import styled from 'styled-components'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import Dropzone from 'components/molecules/Dropzone'
import ImagePreview from 'components/molecules/ImagePreview'

const InputImageContainer = style(Flex)`
    & > *:not(:first-child) {
        margin-top: 8px;
    }
`

export type FileData = {
    id?: string
    src?: string
    file?: File
    selected?: boolean
    chosen?: boolean
}

interface InputImagesProps {
    name?: string
    images: FileData[]
    maximumNumber?: number
    hasError?: boolean
    width?: string
    height?: string
    onChange: (images: FileData[]) => void
}

/**
 * 입력 이미지
 */
const InputImages = (props: InputImagesProps) => {
    const {
        images,
        maximumNumber,
        name,
        hasError,
        width = '100%',
        height = '260px',
        onChange,
    } = props
    const files = useMemo(() => images.filter((img: FileData) => img.file).map((img: FileData) => img.file as File))
}