function updateClock() {
    const now = new Date();
    const secondRatio = now.getSeconds() / 60;
    const minuteRatio = (secondRatio + now.getMinutes()) / 60;
    const hourRatio = (minuteRatio + now.getHours()) / 12;

    setRotation(document.querySelector('.hand.second'), secondRatio * 360);
    setRotation(document.querySelector('.hand.minute'), minuteRatio * 360);
    setRotation(document.querySelector('.hand.hour'), hourRatio * 360);

    requestAnimationFrame(updateClock);
}

function setRotation(element, rotation) {
    element.style.setProperty('--rotation', rotation);
}

updateClock();

   //1.getting the current time.

    //2.calculating how far each hand should be rotated.

    //3.applying that rotation using CSS variables.

    //4.updating the clock continuously using requestAnimationFrame().