const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}


// Edit below line 

const status1 = document.querySelectorAll('.status') [0];
const reserve1 = document.querySelectorAll('button.reserve') [0];
const checkout1 = document.querySelectorAll('button.checkout') [0];
const checkin1 = document.querySelectorAll('button.checkin') [0];

const status2 = document.querySelectorAll('.status') [1];
const reserve2 = document.querySelectorAll('button.reserve') [1];
const checkout2 = document.querySelectorAll('button.checkout') [1];
const checkin2 = document.querySelectorAll('button.checkin') [1];

const status3 = document.querySelectorAll('.status') [2];
const reserve3 = document.querySelectorAll('button.reserve') [2];
const checkout3 = document.querySelectorAll('button.checkout') [2];
const checkin3 = document.querySelectorAll('button.checkin') [2];

checkin1.style.color = null;
status1.style.color = STATUS_MAP.overdue.color;
reserve1.button = STATUS_MAP.overdue.canReserve ? "enabled" : "disabled";
checkout1.button = STATUS_MAP.overdue.canCheckout ? "enabled" : "disabled";
checkin1.button = STATUS_MAP.overdue.canCheckIn ? "enabled" : "disabled";

checkin2.style.color = null;
status2.style.color = STATUS_MAP.reserved.color;
reserve2.button = STATUS_MAP.reserved.canReserve ? "enabled" : "disabled";
checkout2.button = STATUS_MAP.reserved.canCheckout ? "enabled" : "disabled";
checkin2.button = STATUS_MAP.reserved.canCheckIn ? "enabled" : "disabled";

checkin3.style.color = null;
status3.style.color = STATUS_MAP.shelf.color;
reserve3.button = STATUS_MAP.shelf.canReserve ? "enabled" : "disabled";
checkout3.button = STATUS_MAP.shelf.canCheckout ? "enabled" : "disabled";
checkin3.button = STATUS_MAP.shelf.canCheckIn ? "enabled" : "disabled";