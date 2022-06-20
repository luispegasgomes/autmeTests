const pw = require('./autme').password; 
const lifes = require('./autme').lifes; 
const check = require('./autme').check; 
const checkQuestion = require('./autme').checkQuestion;
 
test('Valid Password', () => {
    expect(pw('gomes', 'gomes')).toBe('As passwords correspondem.');
});


test('Throw Error', () => {
    expect(() => pw('gomes', 'gomes2')).toThrow();
});


test('Verify Lifes', () => {
    expect(lifes(0)).toBe('Gameover');
});

test('Throw Error Lifes', () => {
    expect(() => lifes(4)).toThrow();
});

test('Check message', () => {
    expect(check(2)).toBe("Muitos parabéns. Continua no bom caminho!");
});

test('Check message 2', () => {
    expect(check(1)).toBe("Que pena, vais ter de estar mais atento...");
});

test('Throw Error check', () => {
    expect(() => check(-1)).toThrow();
});

test('Check Question 1', () => {
    expect(checkQuestion('O gato está triste!')).toBe('Resposta Correta.');
});

test('Check Question 2', () => {
    expect(checkQuestion('O gato está feliz!')).toBe('Resposta Incorreta.');
});

test('Check Question Error', () => {
    expect(() => lifes('Nothing..')).toThrow();
});




