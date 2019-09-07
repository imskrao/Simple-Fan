let selectSpeed = document.querySelector('#selectSpeed');
selectSpeed.addEventListener('change', () => {
    let selectSpeedValue = document.querySelector('#selectSpeed').value;
    let fan = document.querySelector('.fan');
    switch (selectSpeedValue) {
        case ('4'):
            fan.style.animation = 'fan-spin infinite 1s linear';
            break;
        case ('3'):
            fan.style.animation = 'fan-spin infinite 2s linear';
            break;
        case ('2'):
            fan.style.animation = 'fan-spin infinite 3s linear';
            break;
        case ('1'):
            fan.style.animation = 'fan-spin infinite 4s linear';
            break;
        case ('0'):
            fan.style.animation = 'fan-spin infinite 0s linear';
            break;
        default:
            fan.style.animation = 'fan-spin infinite 1s linear';
    }
});