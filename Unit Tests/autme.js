let correctAnswer = 'O gato está triste!'
let wrongAnswer = 'O gato está feliz!'

exports.password = function (password, confirm) {
    if (password != confirm) {
        throw Error('As passwords não correspondem.')
    } else {
        return "As passwords correspondem."
    }
}

exports.lifes = function (lifes) {
    if (lifes != 0) {
        throw Error('O jogo ainda não acabou.')

    } else {
        return "Gameover"
    }
}

exports.check = function (count) {
    if (count >= 2) {
        return "Muitos parabéns. Continua no bom caminho!"
    } else if (count < 2 && count >= 0) {
        return "Que pena, vais ter de estar mais atento..."
    } else {
        throw Error('Propriedade count não é válida.')
    }
}

exports.checkQuestion = function (selected) {
    if (selected == correctAnswer) {
        return "Resposta Correta."
    } else if (selected == wrongAnswer) {
        return "Resposta Incorreta."
    } else {
        throw Error('Algo correu mal.')
    }
}