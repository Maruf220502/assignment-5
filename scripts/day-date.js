function updateDate() {
    const date = new Date();
    
   
    const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options).replace(',', '');
    
    
    const [day, month, dayNum, year] = formattedDate.split(' ');

    document.getElementById("dayText").innerText = day; 
    document.getElementById("dateText").innerText = 
    `${month} ${dayNum} ${year}`; 
}

updateDate();