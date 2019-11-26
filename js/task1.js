/**
 * Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
 * и следующие функции для работы с этим объектом:
 *  Функция для вывода на экран информации об автомобиле;
 *  Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
 * Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
 */

let auto = {
    manufacturer: "Mercedes-Benz",
    model: "GLE SUV",
    "year of manufacture": "2019 yaer",
    "average speed": 200,
    autoinfo: function () {
        console.log(`${this.manufacturer} ${this["year of manufacture"]} "${this.model}"  ${this["average speed"]}`);
    },
    test: function(distances) {
        let time = distances / this["average speed"]
        if (time>=4){
            let a = +(time / 4).toFixed(1)
            time = (time + a)
        }
        return `${time} h`
    }
    
}
console.log(auto);
auto.autoinfo();
console.log(auto.test(1800)); 