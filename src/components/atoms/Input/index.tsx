import { InputProps } from '@mui/material'
import React from 'react'
import styled, { css } from 'styled-components'

/*
* 텍스트 입력
*/
const StyledInput = styled.input<{ hasError?: boolean, hasBorder?: boolean }>`
    color: ${({ theme }) => theme.colors.inputText};
    ${({ theme, hasBorder, hasError }) => {
        console.log(theme.colors)
        console.log(theme, hasBorder, hasError)
        // 경계선 표시
        if (hasBorder) {
            // 에러 시 빨간색 경계선
            return css`
                border: 1px solid ${hasError ? theme.colors.danger : theme.colors.border};
                border-radius: 5px;
            `
        } else {
            return css`
                border: none;
            `
        }
    }}
    padding: 11px 12px 12px 9px;
    box-sizing: border-box;
    outline: none;
    width: 100%;
    height: 38px;
    font-size: 16px;
    line-height: 19px;

    &::placeholder {
        color: ${({ theme }) => theme.colors.placeholder};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type='number'] {
        -moz-appearance: textfield;
    }
`

const Input = ({ hasBorder = true, ...props }) => {
    return (
        <StyledInput hasBorder={hasBorder} {...props} />
    )
}

export default Input