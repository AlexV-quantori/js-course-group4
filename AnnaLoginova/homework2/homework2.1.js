class RaceEmulator {
    firstRaceArray = [];
    secondRaceArray = [];
    GameStates = {
    'in progress': 0,
    'win': 1,
    'start again': 2
}
    startRace(){
        console.log('Starting new game')
        while (true) {
             this.firstRaceArray.push( this.getRandomNumber());
             this.secondRaceArray.push( this.getRandomNumber());

            const firstRaceArrayStatus =  this.getRaceArrayStatus(this.firstRaceArray);
            const secondRaceArrayStatus =  this.getRaceArrayStatus(this.secondRaceArray);

            if (firstRaceArrayStatus === secondRaceArrayStatus &&
                firstRaceArrayStatus === this.GameStates["in progress"]) {
                continue
            }

            console.log('Game over!')

            if (firstRaceArrayStatus === this.GameStates["start again"] ||
                secondRaceArrayStatus === this.GameStates["start again"]) {
                 this.printResults();
                 this.resetArrays();
            } else {
                 this.printResults();
                break;
            }
        }
    }

     getRaceArrayStatus(array){
        const arraySum =  this.getSumOfArrayElements(array);
        if (arraySum < 100) return this.GameStates["in progress"];
        if (arraySum < 105) return this.GameStates.win;
        if (arraySum >=105) return this.GameStates["start again"];
    }

     getRandomNumber(){
        return Math.round(Math.random() * (10 - 2) + 2)
    }

     getSumOfArrayElements(array){
        return array.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    }

     resetArrays() {
        this.firstRaceArray = [];
        this.secondRaceArray = [];
    }

     printResults() {
        console.log(`Results: 
        First race: ${ this.getSumOfArrayElements(this.firstRaceArray)}
        Second race: ${ this.getSumOfArrayElements(this.secondRaceArray)}`);
    }
}

const raceEmulator = new RaceEmulator();
raceEmulator.startRace();