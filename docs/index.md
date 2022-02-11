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
### Features
- Super simple
- Easy to use
- Customisable

### Documentation
coming soon*

### Support or Contact

Having trouble? Check out our [documentation](/#Documentation) or [contact me](https://github.com/armoredvortex) and we’ll help you sort it out.
