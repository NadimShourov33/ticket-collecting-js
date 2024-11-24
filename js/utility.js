// import { totalSetNow } from './smart-ticket.js';
// console.log(totalSetNow);

function setBackgroundColotById(element) {
    element.classList.add('bg-[#1DD100]');
}

function removeBackgroundColotById(element) {
    element.classList.remove('bg-[#1DD100]');
}

function addElementById(element) {
    const currentAvailableSeat = document.getElementById('available-seat');
    const currentAvailableSeatText = currentAvailableSeat.innerText;
    const currentSeat = parseInt(currentAvailableSeatText);
    const updateSeat = currentSeat + 1;
    currentAvailableSeat.innerText = updateSeat;
    return element;
}

function addSeat() {
    const currentSelectSeat = document.getElementById('select-seat');
    const currentSelectSeatText = currentSelectSeat.innerText;
    const currentSelected = parseInt(currentSelectSeatText);
    const totalSeat = currentSelected + 1;
    currentSelectSeat.innerText = totalSeat;
    // totalSetNow= totalSeat
    return totalSeat;
}

function substactionElementById(element) {
    const currentAvailableSeat = document.getElementById('available-seat');
    const currentAvailableSeatText = currentAvailableSeat.innerText;
    const currentSeat = parseInt(currentAvailableSeatText);
    const updateSeat = currentSeat - 1;
    currentAvailableSeat.innerText = updateSeat;
    return element;
}

function subSeat() {
    const currentSelectSeat = document.getElementById('select-seat');
    const currentSelectSeatText = currentSelectSeat.innerText;
    const currentSelected = parseInt(currentSelectSeatText);
    const totalSeat = currentSelected - 1;
    currentSelectSeat.innerText = totalSeat;
    // totalSetNow= totalSeat
    return totalSeat;
}

function addCurrentSeat(element, businessclass, price) {
     const currentSeatsElement = document.getElementById('current-seats');

    // Create a div element to hold the seat information
    const seatDiv = document.createElement('div');
    seatDiv.classList.add('seat-info', 'grid', 'grid-cols-3', 'justify-between' ,'w-full');

    const seatPTag = document.createElement('p');
    const classPTag = document.createElement('p');
    const pricePTag = document.createElement('p');

    classPTag.classList.add('text-center');
    pricePTag.classList.add('text-right');

    seatPTag.textContent = element;
    classPTag.textContent = businessclass;
    pricePTag.textContent = price;
    
    seatDiv.appendChild(seatPTag);
    seatDiv.appendChild(classPTag);
    seatDiv.appendChild(pricePTag);
    currentSeatsElement.appendChild(seatDiv);
}

// function removeCurrentSeat(element) {
//     const currentSeatsElement = document.getElementById('current-seats');
//     console.log(currentSeatsElement);
//     const seatElements = currentSeatsElement.querySelectorAll('div');
//     console.log(seatElements);
//     seatElements.forEach(seatElement => {
//         if (seatElement.textContent === element) {
//             seatElement.remove();
//         }
//     });
// }

function removeCurrentSeat(element) {
    const currentSeatsElement = document.getElementById('current-seats');
    const seatElements = currentSeatsElement.querySelectorAll('.seat-info');

    seatElements.forEach(seatElement => {
        const seatPTag = seatElement.querySelector('p');
        if (seatPTag.textContent === element) {
            seatElement.remove();
        }
    });
}


