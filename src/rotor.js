const convertStr = require('./convertstr.js')
function checkLetters(str){
    let alpha = new Set("abcdefghijklmnopqrstuvwxyz")
    for (let c of str.toLowerCase()){
        alpha.delete(c)
        if (alpha.size == 0) return true
    }
    return false
}

function rotor(configuration, position) {
    if (configuration.length != 26) {
        return console.error('Rotor Configuration must be a string of length 26');
    }    
    // Check if configuration contains all the aplhabets
    if (!checkLetters(configuration)) {
        console.error('Rotor configuration must contain distinct alphabets only');
    }
    let rotor = {};
    for (var i = 0; i < configuration.length; i++) {
        rotor[i+1] = convertStr.letterToNum(configuration[i].toLowerCase())
    }
    position = convertStr.letterToNum(position.toLowerCase())
    return {rotor, position}
}

module.exports = rotor;