import React, { useEffect } from "react"
import { Meta } from '@storybook/react'
import Header from './index'
import { ShoppingCartContextProvider, useShoppingCartContext } from "contexts/ShoppingCartContext"
import { AuthContextProvider } from "contexts/AuthContext"

export default { title: 'organisms/Header' } as Meta<typeof Header>

// 로그인 상태가 아닐 때의 헤더
export const NoLogin = () => <Header />
