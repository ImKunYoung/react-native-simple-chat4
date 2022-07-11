/*입력 받은 값이 이메일 형식인지 확인*/
export const validateEmail = email => {

    const regex = /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[0-9?A-z]+\.[A-z]{2}.?[A-z]{0,3}$/

    /*검색된 문자열에 패턴이 있는지 여부 boolean*/
    return regex.test(email);

}

