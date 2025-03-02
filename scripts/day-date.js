function updateDate() {
    const date = new Date();
    
   
    const changeDay = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    const theNewDate = date.toLocaleDateString('en-US', changeDay).replace(',', '');
    
    
    const [day, month, dayNum, year] = theNewDate.split(' ');

    document.getElementById("dayText").innerText = day; 
    document.getElementById("dateText").innerText = 
    `${month} ${dayNum} ${year}`; 
}

updateDate();