import React, { useEffect } from "react"
import { Meta } from '@storybook/react'
import Header from './index'
import { ShoppingCartContextProvider, useShoppingCartContext } from "contexts/ShoppingCartContext"
import { AuthContextProvider } from "contexts/AuthContext"

export default { title: 'organisms/Header' } as Meta<typeof Header>

// 로그인 상태가 아닐 때의 헤더
export const NoLogin = () => <Header />

// 로그인 상태의 헤더
export const Login = () => {
    // 더미 사용자 추가
    const authUser = {
        id: 1,
        username: 'dummy',
        displayName: 'Jaeseok Han',
        email: 'jaeseok@example.com',
        profileImageUrl: '/images/sample/1.jpg',
        description: ''
    }

    const ChildComponent = () => {
        const { addProductToCart } = useShoppingCartContext()
        // 더미 상품 추가
        useEffect(() => {
            addProductToCart({
                id: 1,
                category: 'book',
                title: 'Product',
                description: '',
                imageUrl: '/images/sample/1.jpg',
                blurDataUrl: '',
                price: 1000,
                condition: 'used',
                owner: authUser,
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        return <Header />
    }

    return (
        <ShoppingCartContextProvider>
            <AuthContextProvider
                context={{ apiRootUrl: 'https://dummy' }}
                authUser={authUser}
            >
                <ChildComponent/>
            </AuthContextProvider>
        </ShoppingCartContextProvider>
    )
    
}