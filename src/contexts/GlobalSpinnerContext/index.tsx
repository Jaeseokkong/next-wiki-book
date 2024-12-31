import React, { useState, useContext, createContext } from 'react'

const GlobalSpinnerContext = createContext<boolean>(false)
const GlobalSpinnerActionsContext = createContext<
    React.Dispatch<React.SetStateAction<boolean>>
>(() => {})

// 글로벌 스피너 표시/비표시
export const useGlobalSpinnerContext = (): boolean => useContext<boolean>(GlobalSpinnerContext)

// 글로벌 스피너 표시/비표시 액션
export const useGlobalSpinnerActionContext = (): React.Dispatch<
    React.SetStateAction<boolean>
> => useContext<React.Dispatch<React.SetStateAction<boolean>>>(GlobalSpinnerActionsContext)

interface GlobalSpinnerContextProviderProps {
    children?: React.ReactNode
}

/**
 * 글로벌 스피너 콘텍스트 제공자
 */
const GlobalSpinnerContextProvider = ({
    children
}: GlobalSpinnerContextProviderProps) => {
    const [isGlobalSpinnerOn, setIsGlobalSpinnerOn] = useState(false)

    return (
        <GlobalSpinnerContext.Provider value={isGlobalSpinnerOn}>
            <GlobalSpinnerActionsContext.Provider value={setIsGlobalSpinnerOn}>
                {children}
            </GlobalSpinnerActionsContext.Provider>
        </GlobalSpinnerContext.Provider>
    )
}

export default GlobalSpinnerContextProvider