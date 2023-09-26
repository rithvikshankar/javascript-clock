const updateClock = () => {
  let now = new Date();
  let hours = now.getHours()
  let mins = now.getMinutes().toString().padStart(2, '0');
  let sec = now.getSeconds().toString().padStart(2, '0');

  let amPm = hours > 12 ? 'PM' : 'AM';
  hours %= 12;
  hours = hours.toString().padStart(2, '0');


  document.querySelector('.hours').textContent = hours;
  document.querySelector('.minutes').textContent = mins;
  document.querySelector('.seconds').textContent = sec;
  document.querySelector('.am-pm').textContent = amPm;
}  

updateClock();
setInterval(updateClock, 1000);