/**
 * Responsive 속성
 * CSS 속성값을 브레이크 포인트별로 설정할 수 있다
 * T는 CSS 속성값의 타입
 */
export type ResponsiveProps<T> = {
    base?: T // 기본값
    sm?: T // 620px 이상
    md?: T // 728px 이상
    lg?: T // 1024px 이상
    xl?: T // 1280px 이상
}
export type Responsive<T> = T | ResponsiveProp<T>

/**
 * Flex
 */
type SelfPosition = 
    | 'center' 
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'self-end'
    | 'self-start'
    | 'start'

type ContentPosition = 'center' | 'end' | 'flex-end' | 'flex-start' | 'start'

type ContentDistribution = 
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'stretch'

type CSSPropertyGlobals = 
    | '-moz-initial'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset'

export type CSSPropertyAlignItems =
    | CSSPropertyGlobals
    | SelfPosition
    | 'baseline'
    | 'normal'
    | (string & {})
