let expandButton = document.getElementById('js-expand');
let verifyButton = document.getElementById('js-verify');
let tab = document.querySelector('.pixeltab');
let list = document.querySelector('.unit-result');
let helloBand = document.querySelector('.hello-band');
let tidbits = [
  'Stiai ca: paddingul este distanta dintre continutul unui element si bordura sa.',
  'Stiai ca: Ajax este o tehnica prin care se pot downloada informatii de la server fara a re-incerca pagina.',
  'Stiai ca: Node.js poate rula JavaScript pe server?',
  'Stiai ca: border: 1px solid black este shorthand pentru border-width, border-style si border-color?'
];

let tabExpanded = false;
let checks = [
  () => {
    // exercise 01
    if (
      !document.querySelector('h1') ||
      document.querySelector('h1').innerText !== 'Acesta este titlul meu.'
    ) {
      return {
        status: 1,
        message: 'Nu ai adaugat un element h1 cu textul "Acesta este titlul meu."'
      };
    }

    return {
      status: 0,
      message: 'Un element h1 cu textul "Acesta este titlul meu.": OK'
    };
  },
  () => {
    // exercise 02
    if (
      !document.querySelector('h2') ||
      document.querySelector('h2').innerText !== 'Acesta este subtitlul meu.'
    ) {
      return {
        status: 1,
        message: 'Nu ai adaugat un element h2 cu textul "Acesta este subtitlul meu."'
      };
    }

    return {
      status: 0,
      message: 'Un element h2 cu textul "Acesta este subtitlul meu.": OK'
    };
  },
  () => {
    // exercise 03
    if (
      !document.querySelector('h3') ||
      document.querySelector('h3').innerText !== 'Acesta este un titlu mai mic.'
    ) {
      return {
        status: 1,
        message: 'Nu ai adaugat un element h3 cu textul "Acesta este un titlu mai mic."'
      };
    }

    return {
      status: 0,
      message: 'Un element h3 cu textul "Acesta este subtitlul meu.": OK'
    };
  },
  () => {
    // exercise 04
    if (
      !document.querySelector('h4') ||
      document.querySelector('h4').innerText !== 'Acesta este un titlu de nivel 4.'
    ) {
      return {
        status: 1,
        message: 'Nu ai adaugat un element h4 cu textul "Acesta este un titlu de nivel 4."'
      };
    }

    return {
      status: 0,
      message: 'Un element h4 cu textul "Acesta este un titlu de nivel 4.": OK'
    };
  },
  () => {
    // exercise 05
    if (
      !document.querySelector('h5') ||
      document.querySelector('h5').innerText !== 'Acesta este un titlu de nivel 5.'
    ) {
      return {
        status: 1,
        message: 'Nu ai adaugat un element h5 cu textul "Acesta este un titlu de nivel 5."'
      };
    }

    return {
      status: 0,
      message: 'Un element h5 cu textul "Acesta este un titlu de nivel 5.": OK'
    };
  },
  () => {
    // exercise 06
    if (
      !document.querySelector('h6') ||
      document.querySelector('h6').innerText !== 'Acesta este un titlu de nivel 6.'
    ) {
      return {
        status: 1,
        message: 'Nu ai adaugat un element h6 cu textul "Acesta este un titlu de nivel 6."'
      };
    }

    return {
      status: 0,
      message: 'Un element h6 cu textul "Acesta este un titlu de nivel 6.": OK'
    };
  },
];

setTidbit();

expandButton.addEventListener('click', (event) => {
  tab.classList.toggle('pixeltab--expanded');
  tabExpanded = !tabExpanded;
  event.target.innerText = tabExpanded ? 'Inchide' : 'Deschide';
  setTidbit();
});

verifyButton.addEventListener('click', (event) => {
  runTests();
  setTidbit();
});

function runTests() {
  list.innerHTML = '';

  checks.forEach((check) => {
    let testResult = check();
    let li = document.createElement('li');

    li.innerText = testResult.message;

    li.classList.add(
      'unit-result',
      testResult.status === 0 ? 'unit-result--passed' : 'unit-result--failed'
    );

    list.append(li);
  });
}

function setTidbit() {
  helloBand.innerText = tidbits[Math.floor(Math.random() * tidbits.length)]
}