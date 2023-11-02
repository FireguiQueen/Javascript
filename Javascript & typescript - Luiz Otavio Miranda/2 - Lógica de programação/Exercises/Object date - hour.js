const date = new Date(2019, 1, 2, 1, 25);
const hour = date.getHours();

function AddZeroToHour(hour){
    const addingZero = hour < 10? `0${hour}` : hour;
    return addingZero;
}
console.log(AddZeroToHour(hour))
