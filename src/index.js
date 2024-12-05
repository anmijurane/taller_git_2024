import { students } from "./data.js";
const _ = (el) => document.getElementById(el);

const __main__ = () => {

  const container = _('container--section__cards');
  container.innerHTML = students.length > 0 ? students.map(card) : 'No hay información';
}

const generateHex = (w1, w2, w3) => {
  const getValueForLetter = (letter) => {
    let ascii = 0;
    for (let i = 0; i < letter.length; i++) {
      ascii += letter.charCodeAt(i);
    }
    return ascii;
  }
  const val1 = getValueForLetter(w1);
  const val2 = getValueForLetter(w2);
  const val3 = getValueForLetter(w3);

  const color = `#${(val1 % 256).toString(16).padStart(2, '0')}${(val2 % 256).toString(16).padStart(2, '0')}${(val3 % 256)
    .toString(16)
    .padStart(2, '0')}`;
  
  return color;
}

const defaultText = 'Sin info';

const card = ({ name = defaultText, lastname = defaultText, favorite_subject = defaultText, whatever = '' }) => {
  const [ w1, w2, w3 ] = name.length >= 3 ? name : ['A','A','A'];
  const color = generateHex(w1, w2, w3);
  console.log({ color })
  return ` <div class="card--container" style="border-color: ${color}">
    <div class="card--containe__principal-info">
      <h3 style="color: ${color}">${name}</h3>
      <p>${lastname}</p>
      <hr color=${color}>
    </div>
    <div class="card--container__secondary-info">
      <p style="color: ${color}">Mi materia favorita es:</p>
      <p>${favorite_subject}</p>
      ${whatever.length > 0 ? `
        <p style="color: ${color}">Tengo algo que decir:</p>
        <p class="wrap--text">${whatever}</p>
        ` : ''
      }
    </div>
  </div>
`
}

__main__();