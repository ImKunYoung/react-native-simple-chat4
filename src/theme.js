const colors = {
    white: '#ffffff',
    black: '#000000',
    grey_0:'#d5d5d5',
    grey_1: '#a6a6a6',
    red: '#e84118',
    blue: '#3679fe',
}

export const theme = {
    background: colors.white,
    text: colors.black,

    errorText: colors.red, /*오류 메시지 택스트 컬러*/

    imageBackground: colors.grey_0,
    imageButtonBackground: colors.grey_1,
    imageButtonIcon : colors.white,

    label: colors.grey_1,
    inputPlaceholder: colors.grey_1,
    inputBorder: colors.grey_1,

    /*버튼 컴포넌트*/
    buttonBackground: colors.blue,
    buttonTitle: colors.white,
    buttonUnfilledTitle: colors.blue, // 내부가 채워지지 않은 버튼의 타이틀 색

    /*Navigation 헤더*/
    headerTintColor: colors.black,
}