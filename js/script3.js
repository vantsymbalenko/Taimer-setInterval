function Taimer() {
  var accept = 1;
  var ul = document.body.querySelector("ul");

  this.minutes = document.body.querySelector(".minutes");
  this.seconds = document.body.querySelector(".seconds");
  this.mseconds = document.body.querySelector(".mseconds");

  this.start = function() {
    if (accept == 0) {
      return;
    }
    accept = 0;
    this.timmerIdMinutes = setInterval(this.grow, 60000, this.minutes, 1);
    this.timmerIdSeconds = setInterval(this.grow, 1000, this.seconds, 2);
    this.timmerIdMseconds = setInterval(this.grow, 1, this.mseconds, 3);
  }

  this.grow = function(element, id) {
    if (((id == 1 || id == 2) && +element.innerHTML > 58) || (id == 3 && +element.innerHTML > 98)) {
      element.innerHTML = 0;
    } else {
      element.innerHTML = +element.innerHTML + 1;
    }
  }

  this.stop = function() {
    accept = 1;
    clearInterval(this.timmerIdMinutes);
    clearInterval(this.timmerIdSeconds);
    clearInterval(this.timmerIdMseconds);
  }

  this.lap = function() {
    var li = document.createElement("li");
    if (accept == 1) {
      return;
    }
    li.classList.add("listLap");
    li.innerHTML = this.minutes.innerHTML + ":" + this.seconds.innerHTML + ":" + this.mseconds.innerHTML;
    ul.appendChild(li);
  }

  this.reset = function() {
    accept = 1;
    this.minutes.innerHTML = 0;
    this.seconds.innerHTML = 0;
    this.mseconds.innerHTML = 0;

    clearInterval(this.timmerIdMinutes);
    clearInterval(this.timmerIdSeconds);
    clearInterval(this.timmerIdMseconds);

    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }

  this.start = this.start.bind(this);
  this.grow = this.grow.bind(this);
  this.stop = this.stop.bind(this);
  this.lap = this.lap.bind(this);
  this.reset = this.reset.bind(this);
}

var taimer = new Taimer();
document.body.querySelector(".start").addEventListener("click", taimer.start);
document.body.querySelector(".stop").addEventListener("click", taimer.stop);
document.body.querySelector(".lap").addEventListener("click", taimer.lap);
document.body.querySelector(".reset").addEventListener("click", taimer.reset);