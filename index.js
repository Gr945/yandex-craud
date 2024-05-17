const runninText = 'Дело помощи утопающим — дело рук самих утопающих! * Шахматы двигают вперед не только культуру, но и экономику! * Лед тронулся, господа присяжные заседатели!';

const runningBlock = document.getElementsByName('running-line');

let i = 0;
function running() {
    if (i++ < runninText.length) {
        runningBlock.forEach((el) =>
            el.innerHTML = runninText.substring(i) + ' * ' + runninText.substring(0, i));
    } else {
        i = 0;
    }

    setTimeout("running()", 100);
}

running();

//

const upButton = document.getElementById('up');
const downButton = document.getElementById('down');
const stepBlock = document.getElementById('step');
let participantNames = document.getElementsByClassName('participant-name');
let participantStatuses = document.getElementsByClassName('participant-status');
const arrayGrosman =
    [{ name: 'Хозе-Рауль Капабланка', status: 'Чемпион мира по шахматам' },
    { name: 'Эммануил Ласкер', status: 'Чемпион мира по шахматам' },
    { name: 'Александр Алехин', status: 'Гроссмейстер' },
    { name: 'Олег Тюхин', status: 'Гроссмейстер' },
    { name: 'Алексей Старостин', status: 'Гроссмейстер' },
    { name: 'Магнус Карлсон', status: 'Чемпион мира по шахматам' }];
let step = 1;

stepBlock.innerHTML = `${step}/${arrayGrosman.length}`;

function changeGrosman() {

    stepBlock.innerHTML = `${step}/${arrayGrosman.length}`;
    let activeGrosman = arrayGrosman.slice(step - 1, step + 2);
    activeGrosman.forEach((men, ind) => {
        participantNames[ind].innerHTML = men.name;
        participantStatuses[ind].innerHTML = men.status;
    });

    if (step === arrayGrosman.length - 3) {
        upButton.classList.add('disable-arrow');
    } else {
        upButton.classList.remove('disable-arrow');
    }

    if (step === 1) {
        downButton.classList.add('disable-arrow');
    } else {
        downButton.classList.remove('disable-arrow');
    }
}

changeGrosman();

upButton.addEventListener('click', () => {
    if (step < arrayGrosman.length - 3) {
        step++;
        changeGrosman();
    }
});

downButton.addEventListener('click', () => {
    if (step > 1) {
        step--;
        changeGrosman();
    }
})


// stepper375

let stepper = 0;

const upStepperButton = document.getElementById('stepper-up');
const downStepperButton = document.getElementById('stepper-down');
const centerStepperBox = document.getElementById('steper375');
const stepperBox = document.getElementById('stepper');

function handleStepperClick() {
    stepperBox.style.marginLeft = `-${stepper * 370}px`;
    if (stepper === 4) {
        upStepperButton.classList.add('disable-arrow');
    } else {
        upStepperButton.classList.remove('disable-arrow');
    }

    if (stepper === 0) {
        downStepperButton.classList.add('disable-arrow');
    } else {
        downStepperButton.classList.remove('disable-arrow');
    }
}

handleStepperClick();
upStepperButton.addEventListener(('click'), () => {
    if (stepper < 4) {
        stepper++;
        
        handleStepperClick()
    }
})

downStepperButton.addEventListener(('click'), () => {
    if (stepper > 0) {
        stepper--;
        
        handleStepperClick()
    }
})

//lastStepper
const lastUpButton = document.getElementById('last-up-button');
const lastDownButton = document.getElementById('last-down-button');
const lastStepBlock = document.getElementById('last-step');

let lastParticipantName = document.getElementById('last-participant-name');
let lastParticipantStatus = document.getElementById('last-participant-status');

let lastStep = 1;
lastStepBlock.innerHTML = `${lastStep}/${arrayGrosman.length}`;

const lastChangeGrosman = () => {
    lastStepBlock.innerHTML = `${lastStep}/${arrayGrosman.length}`;
    const activeGrosman = arrayGrosman[lastStep - 1]
        lastParticipantName.innerText = activeGrosman.name;
        lastParticipantStatus.innerText = activeGrosman.status;
   
    if (lastStep === arrayGrosman.length) {
        lastUpButton.classList.add('disable-arrow');
    } else {
        lastUpButton.classList.remove('disable-arrow');
    }

    if (lastStep === 1) {
        lastDownButton.classList.add('disable-arrow');
    } else {
        lastDownButton.classList.remove('disable-arrow');
    }
}

lastChangeGrosman();

lastUpButton.addEventListener('click', () => {
    if (lastStep < arrayGrosman.length) {
        lastStep++;
        lastChangeGrosman();
    }
});

lastDownButton.addEventListener('click', () => {
    if (lastStep > 1) {
        lastStep--;
        lastChangeGrosman();
    }
})



