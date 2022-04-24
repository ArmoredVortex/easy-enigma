## Welcome to easy-enigma Documentation

### Installation
NPM: <br>
<a href="https://www.npmjs.com/package/easy-enigma"><img src="https://nodei.co/npm/easy-enigma.png?downloadRank=true&downloads=true&downloadRank=true&stars=true" /></a><br>

### Quick Start
(scroll below for detailed instructions)

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

## Detailed Instructions
### Import
```javascript
const enigmajs = require('enigmajs');
```
### Creating a rotor
```javascript
const rotor1 = enigmajs.rotor(/* Rotor Configuration */, /* Current rotor position */);
```

### Creating a reflector
```javascript
const reflector = enigmajs.reflector(/* Reflector Configuration */);
```

### Creating the enigma engine
```javascript
const engine = enigmajs.engine( [/* rotor1, rotor2, rotor3 */], /* reflector */
```
### Modifying rotor position on engine
```javascript
engine.setRotorPositions(['A', 'A', 'A']);
```
### Support or Contact

Having trouble? Check out our [documentation](/#Documentation) or [contact me](https://armoredvortex.github.io/#contact) and we’ll help you sort it out.
