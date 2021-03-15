export class RaceEmulator {
    firstRaceArray = [];
    secondRaceArray = [];
    GameStates = {
    'in progress': 0,
    'win': 1,
    'start again': 2
}
    async startRace(){
        while (true) {
            await this.firstRaceArray.push(await this.getRandomNumber());
            await this.secondRaceArray.push(await this.getRandomNumber());

            const firstRaceArrayStatus = await this.getRaceArrayStatus(this.firstRaceArray);
            const secondRaceArrayStatus = await this.getRaceArrayStatus(this.secondRaceArray);

            if (firstRaceArrayStatus === secondRaceArrayStatus &&
                firstRaceArrayStatus === GameStates["in progress"]) {
                continue
            }

            console.log('Game over!')

            if (firstRaceArrayStatus === GameStates["start again"] ||
                secondRaceArrayStatus === GameStates["start again"]) {
                await this.printResults();
                console.log('Starting new game')
                await this.resetArrays();
            } else {
                await this.printResults();
                break;
            }
        }
    }

    async getRaceArrayStatus(array){
        const arraySum = await this.getSumOfArrayElements(array);
        if (arraySum < 100) return GameStates["in progress"];
        if (arraySum < 105) return GameStates.win;
        if (arraySum >=105) return GameStates["start again"];
    }

    async getRandomNumber(){
        return Math.random() * (10 - 2) + 2;
    }

    async getSumOfArrayElements(array){
        return array.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    }

    async resetArrays() {
        this.firstRaceArray = [];
        this.secondRaceArray = [];
    }

    async printResults() {
        console.log(`Results: \nFirst race: ${await this.getSumOfArrayElements(this.firstRaceArray)}\n
        Second race: ${await this.getSumOfArrayElements(this.secondRaceArray)}`);
    }
}
