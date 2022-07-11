/*입력 받은 값이 이메일 형식인지 확인*/
export const validateEmail = email => {
    /*이메일 형식*/
    const regex = /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[0-9?A-z]+\.[A-z]{2}.?[A-z]{0,3}$/

    /*검색된 문자열에 패턴이 있는지 여부 boolean*/
    return regex.test(email);

}

/*입력 받은 문자열의 공백 제거 처리*/
export const removeWhitespace = text => {
    /* 문자열 내 모든 공백 */
    const regex = /\s/g;

    /*공백 제거된 문자열 반환*/
    return text.replace(regex, '');
}