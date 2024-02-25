const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemember', 'Decemember'];
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const giveAway = document.querySelector(".giveaway");
const deadline = document.querySelector(".countDown-clock");
const items = document.querySelectorAll("span:first-child");
// date constructor which creates date object
const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
// get Day method date object value ko 0 se 6 tak deta hain jaha zero ka matlab sunday and 6 matlab saturday Hain;
const tempDay = tempDate.getDay();
const date = tempDate.getDate();
// is tarah se me apne according date create kar sakta hoon....
const futureDate = new Date(tempYear, tempMonth, date + 10, 11, 30, 0);
const year = futureDate.getFullYear();
let month = futureDate.getMonth();
month = months[month];
const dt = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const weekDay = weekDays[futureDate.getDay()];
giveAway.innerHTML = `Giveaway end on ${weekDay}, ${dt} ${month} ${year} ${hours}:${minutes}am`;
const futureTime = futureDate.getTime();
function getRemainingTime(){
    const todayTime = new Date().getTime();
    const diffTime = futureTime - todayTime;
    const oneDay = 24 * 60 * 60 * 1000; // converting hours into millisecond....
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    let days =  Math.floor((diffTime / oneDay));
    let hours = Math.floor((diffTime % oneDay) / oneHour);
    let minutes = Math.floor((diffTime % oneHour) / oneMinute);
    let seconds = Math.floor((diffTime % oneMinute) / 1000);
    const values = [days, hours, minutes, seconds];
    function format(item){
        if(item < 10){
           return (item = `0${item}`);
        }
        return item;
    }

    items.forEach((item, index) => {
          item.innerHTML = format(values[index]);
    });
    if(diffTime < 0){
      clearInterval(countDown)
       deadline.innerHTML = `<h4 class="expired">sorry, this giveAway has expired </h4>`
    }
}
let countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();

