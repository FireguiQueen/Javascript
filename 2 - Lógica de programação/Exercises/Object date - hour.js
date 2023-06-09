const date = new Date();
const hour = date.getHours();

function AddZeroToHour(hour){
    const addingZero = hour < 10? `` : 1;
    return addingZero
}
