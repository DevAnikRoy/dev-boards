// for date
function formatDate(date){
    const dayName = date.toLocaleString('default', { weekday: 'short'});
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${dayName}, ${day} ${month} ${year}`;
}
function updateDate(){
    const getDate = new Date();
    const date = formatDate(getDate);
    const dateElement = document.getElementById('date');
    dateElement.textContent = date;
}
updateDate()