const Signup = require('../../src/screens/Signup');
const {ErrorMessage} = require("../../src/screens/Signup");

test('Input 컴포넌트에 입력 받은 값이 이메일 형식인지 확인(이메일 형식인 경우)', () => {
    const names = 's'
    const email = 'ur2Kunyoung2@outlook.com'
    const password = 'sdfafd'
    const passwordConfirm = 'sdfafd'
    console.log(Signup.ErrorMessage({names, email, password, passwordConfirm}))
   /* expect(Signup.ErrorMessage(names, email, password, passwordConfirm)).toEqual(' ');*/
})