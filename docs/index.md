## Welcome to easy-enigma Documentation

### Installation
NPM: <br>
<a href="https://www.npmjs.com/package/easy-enigma"><img src="https://nodei.co/npm/easy-enigma.png?downloadRank=true&downloads=true&downloadRank=true&stars=true" /></a><br>

### Getting Started

```javascript
const enigmajs = require('enigmajs');

const rotor1 = enigmajs.rotor('BDFHJLCPRTXVZNYEIWGAKMUSQO', 'A');
const rotor2 = enigmajs.rotor('AJDKSIRUXBLHWTMCQGZNPYFVOE', 'A');
const rotor3 = enigmajs.rotor('EKMFLGDQVZNTOWYHXUSPAIBRCJ', 'A');
const reflector = enigmajs.reflector('YRUHQSLDPXNGOKMIEBFZCWVJAT');

const engine = enigmajs.engine([rotor1, rotor2, rotor3],reflector)

const message = 'Hello World'
console.log(engine.convert(message));
```

### Support or Contact

Having trouble with Pages? Check out our [documentation]() or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
