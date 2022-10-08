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
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),

    showTime: () => {
        console.log(`${timer.hours}:${timer.minutes}:${timer.seconds}`);
    },

    changeHours: (h) => {
        // h * 60 * 60 * 1000 for minutes
        const addResult = new Date(new Date().getTime() + (h * 3600 * 1000));
        const subResult = new Date(new Date().getTime() - ((-h) * 3600 * 1000));
        h <= 0 ? console.log(`Minused ${h} hours.Result:${subResult.getHours()}:${subResult.getMinutes()}:${subResult.getSeconds()}`) 
        : console.log(`Added ${h} hours.Result:${addResult.getHours()}:${addResult.getMinutes()}:${addResult.getSeconds()}`);
    },

    changeMinutes: (m) => {
        const addResult = new Date(new Date().getTime() + (m * 24 * 60 * 1000));
        const subResult = new Date(new Date().getTime() - ((-m) * 24 * 60 * 1000));
        m <= 0 ? console.log(`Minused ${m} minutes.Result:${subResult.getHours()}:${subResult.getMinutes()}:${subResult.getSeconds()}`) 
        : console.log(`Added ${m} minutes.Result:${addResult.getHours()}:${addResult.getMinutes()}:${addResult.getSeconds()}`);
    },

    changeSeconds: (s) => {
        const addResult = new Date(new Date().getTime() + (s * 1000));
        const subResult = new Date(new Date().getTime() - ((-s) * 1000));
        s <= 0 ? console.log(`Minused ${s} seconds.Result:${subResult.getHours()}:${subResult.getMinutes()}:${subResult.getSeconds()}`) 
        : console.log(`Added ${s} seconds.Result:${addResult.getHours()}:${addResult.getMinutes()}:${addResult.getSeconds()}`);
    },
};

