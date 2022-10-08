const car = {
    manufacturer: 'Nissan',
    model: 'Skyline GTR-98',
    productionYear: 1998,
    fuelTankVolume: 34,
    consumptionPer100: 7,
    drivers: [],

    showInfo: () => {
        for (let key in car) {
            if (typeof (car[key]) !== 'function') {
                console.log(`${key} : ${car[key]}`);
                continue;
            }
            console.log(`${key} : ${car[key]}`);
        }
    },

    addDriver: (name) => {
        car.drivers.push(name);
    },

    checkDriver: (str) => {
        if (typeof (str) !== 'string') {
            console.log('Enter correct value');
        } else if (!car.drivers.includes(str)) {
            console.log('There\'s no driver with such name');
        } else {
            console.log('Driver is in list!');
        }
    },

    showDriversList: () => car.drivers.forEach(elem => console.log(elem)),

    calcTimeFuel: (distance) => {
        const speed = 60;
        const time = distance / speed;
        let restTime = 0;
        for (let i = 0; i <= time; i++) {
            if (i < 4) {
                restTime = 0;
            } else if (i % 4 === 0) {
                restTime++;
            }
        }
        console.log(`You will need ${Math.floor(time)} hours of driving\nnot including the ${restTime} hours of rest\nand ${Math.ceil((car.fuelTankVolume/100)*distance)} liters of fuel to cover this distance!`);
    },
};

const timer = {
    currentTime: new Date(),
    hours: new Date().getHours(),
    minutes: new Date().getHours(),
    seconds: new Date().getSeconds(),

    showTime: () => {
        console.log(`${timer.hours}:${timer.minutes}:${timer.seconds}`);
    },

    addHours: (h) => {
        const result = timer.currentTime.setTime(timer.currentTime.getTime() + (h * 60 * 60 * 1000));
        console.log(timer.currentTime.getTime());
        console.log(result);    
        // timer.currentTime = timer.currentTime.setHours(timer.currentTime.getHours() + h); 
        // console.log(timer.currentTime.setHours(timer.currentTime.getHours() + h));
        // console.log(timer.currentTime.setTime(timer.currentTime.getTime() + h * 60 * 60 * 1000));
        // console.log(`${timer.hours}:${timer.minutes}:${timer.seconds}`);
    }
};

// console.log(timer.time);

// console.log(new Date().getHours())

timer.showTime();
timer.addHours(20);
timer.showTime();
// timer.showTime();

// console.log(new Date().getTime());