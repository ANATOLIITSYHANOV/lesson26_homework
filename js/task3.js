/**
 * Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:
Функция вывода времени на экран;
Функция изменения времени на переданное количество секунд;
Функция изменения времени на переданное количество минут;
Функция изменения времени на переданное количество часов.
Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например,
 если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».
 */

let time = {
    hours: '00',
    minutes: '00',
    seconds: '00',

    clock: function () {
        console.log(`«${this.hours}:${this.minutes}:${this.seconds}»`);
    },

    second: function (a) {
        this.seconds = +this.seconds + a;
        if (this.seconds >= 60) {
            this.minutes = +this.minutes + Math.floor(this.seconds / 60);
            this.seconds = this.seconds % 60;
        }
        if (this.seconds < 10) {
            this.seconds = `0${this.seconds}`
        }
        if (this.seconds == 0) {
            this.seconds = `00`
        }
        if (this.minutes >= 60) {
            this.hours = +this.hours + Math.floor(this.minutes / 60);
            this.minutes = this.minutes % 60;
        }
        if (this.minutes < 10) {
            this.minutes = `0${this.minutes}`
        }
        if (this.minutes == 0) {
            this.minutes= `00`
        }
        if (this.hours  < 10) {
            this.hours  = `0${this.hours}`
        }
    },

    minute: function (b) {
        this.minutes= +this.minutes + b;
        if (this.minutes >= 60) {
            this.hours = +this.hours + Math.floor(this.minutes / 60);
            this.minutes = this.minutes % 60;
        }
        if (this.minutes < 10) {
            this.minutes = `0${this.minutes}`
        }
        if (this.minutes == 0) {
            this.minutes= `00`
        }
        if (this.hours  < 10) {
            this.hours  = `0${this.hours}`
        }
    },

    hour: function (c) {
        this.hours = +this.hours  + c;
        if (this.hours  < 10) {
            this.hours  = `0${this.hours}`
        }
    }
}

time.clock();
time.second(363636);
time.clock();
time.minute(363636);
time.clock();
time.hour(30);
time.clock();

