const convertstr = require('./convertstr');

function getKeyByValue(object, value) {
    return parseInt(Object.keys(object).find(key => object[key] === value));
}

function rotorVal(rotor,configVal,char) {
    let index = configVal + char - 1;
    if(index > 26){
        index -= 26;
    }
    let indexVal = rotor[index]
    let outVal = indexVal - configVal + 1;
    if(outVal < 1){
        outVal += 26;
    }
    return outVal;
}

function reverseRotorVal(rotor,configVal,char) {
    index = configVal + char -1;
    if(index > 26){
        index -= 26;
    }
    indexVal = getKeyByValue(rotor,index);
    let outVal = indexVal - configVal + 1;
    if(outVal < 1){
        outVal += 26;
    }
    return outVal;
}  

function engine(rotors, reflector) {  
    if ( rotors.length != 3 || typeof reflector === undefined) {
        throw new Error('Only three rotors are supported, and reflector must be set');
    }
    function convert(message) {
        //check if message only contains alphabet
        if(!message.match(/^[a-z A-Z]+$/)){
            throw new Error('Only alphabet is supported');
        }

        //convert message to array
        let messageArr = message.split('');

        //remove spaces
        messageArr = messageArr.filter(function(e){return e!==' '});

        messageArr.forEach(function(char, index){
             // increment rotors
            rotors[0].position++;
            if(rotors[0].position > 26){
                rotors[0].position = 1;
                rotors[1].position++;
                if(rotors[1].position > 26){
                    rotors[1].position = 1;
                    rotors[2].position++;
                    if(rotors[2].position > 26){
                        rotors[2].position = 1;
                    }
                }
            }

            rotor1Out = rotorVal(rotors[0].rotor, rotors[0].position, convertstr.letterToNum(char.toLowerCase()));
            rotor2Out = rotorVal(rotors[1].rotor, rotors[1].position, rotor1Out);
            rotor3Out = rotorVal(rotors[2].rotor, rotors[2].position, rotor2Out);
            reflectorOut = reflector[rotor3Out];
            rotor3In = reverseRotorVal(rotors[2].rotor, rotors[2].position, reflectorOut);
            rotor2In = reverseRotorVal(rotors[1].rotor, rotors[1].position, rotor3In);
            rotor1In = reverseRotorVal(rotors[0].rotor, rotors[0].position, rotor2In);
            messageArr[index] = convertstr.numToLetter(rotor1In);
        });
        return messageArr.join('');
    }

    function getRotorPositions() {
        return [rotors[0].position, rotors[1].position, rotors[2].position];
    }

    function setRotorPositions(positions) {
        if(positions.length != 3){
            throw new Error('Only three rotors are supported');
        }
        rotors[0].position = convertstr.letterToNum(positions[0]);
        rotors[1].position = convertstr.letterToNum(positions[1]);
        rotors[2].position = convertstr.letterToNum(positions[2]);
    }

    return {rotors, reflector, convert, getRotorPositions, setRotorPositions};
}
module.exports = engine