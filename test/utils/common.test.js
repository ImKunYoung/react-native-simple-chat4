const common = require('../../src/utils/common');

/*Test1 - 테스트Input 컴포넌트에 입력 받은 값이 이메일 형식인지 확인한다 (이메일 형식인 경우)*/
test('emailValidation', () => {
    expect(common.validateEmail('ur2kunyoung2@outlook.com')).toBe(true);
})

/*Test2 - 테스트Input 컴포넌트에 입력 받은 값이 이메일 형식인지 확인한다 (이메일 형식이 아닌 경우)*/
test('emailValidation', () => {
    expect(common.validateEmail('ur2kunyoung2')).toBe(false);
})