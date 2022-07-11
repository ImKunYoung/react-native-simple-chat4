const common = require('../../src/utils/common');

test('Input 컴포넌트에 입력 받은 값이 이메일 형식인지 확인(이메일 형식인 경우)', () => {
    console.log(common.validateEmail('ur2kunyoung2'))
    expect(common.validateEmail('ur2kunyoung2@outlook.com')).toBe(true);
})

test('Input 컴포넌트에 입력 받은 값이 이메일 형식인지 확인(이메일 형식이 아닌 경우)', () => {
    console.log(common.validateEmail('ur2kunyoung2'))
    expect(common.validateEmail('ur2kunyoung2')).toBe(false);
})

test('Input 컴포넌트에 입력 받은 문자열의 공백 제거', () => {
    const before = '가 나다라 마 '
    const after = '가나다라마'
    expect(common.removeWhitespace(before)).toEqual(after)
})