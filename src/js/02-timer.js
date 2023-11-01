import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const selectors = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
}

let days = document.querySelector('span[data-days]');
let hours = document.querySelector('span[data-hours]');
let minutes = document.querySelector('span[data-minutes]');
let seconds = document.querySelector('span[data-seconds]');

const currentDate = new Date();

startBtn.disabled = true;


const fp = flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime () - currentDate.getTime() < 0) {
      Notiflix.Report.warning(
        'WARNING!',
        'Please choose a date in the future',
        'Ok'
      );
    } else {
      startBtn.disabled = false;
      startBtn.addEventlistener('click, () => {
        const ')
      let ms = selectedDates[0].getTime() - currentDate.getTime();
    }

    setInterval(() => {
      function convertMs(ms) {

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;


        const days = Math.floor(ms / day);
        const hours = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);

        return { days, hours, minutes, seconds };
      }

      days.textContent = convertMs(ms).days;
      hours.textContent = convertMs(ms).hours;
      minutes.textContent = convertMs(ms).minutes;
      seconds.textContent = convertMs(ms).seconds;

      ms -= 1;

    }, 1000)
  },
};



console.log(currentDate)
