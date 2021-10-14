function printTimeEverySecond() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
};

setInterval(printTimeEverySecond, 1000);
