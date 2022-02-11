const convertStr = require('./convertstr.js')
function checkLetters(str){
    let alpha = new Set("abcdefghijklmnopqrstuvwxyz")
    for (let c of str.toLowerCase()){
        alpha.delete(c)
        if (alpha.size == 0) return true
    }
    return false
}

function reflector(configuration) {
    if (configuration.length != 26) {
        return console.error('Rotor Configuration must be a string of length 26');
    }    
    // Check if configuration contains all the aplhabets
    if (!checkLetters(configuration)) {
        return console.error('Rotor configuration must contain distinct alphabets only');
    }
    let reflector = {};
    for (var i = 0; i < configuration.length; i++) {
        reflector[i+1] = convertStr.letterToNum(configuration[i].toLowerCase())
    }
    return reflector;
}

module.exports = reflector