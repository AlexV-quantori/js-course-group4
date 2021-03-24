const fs = require('fs');

class RouletteProgram {
    firstRouletteDict = {};
    secondRouletteDict = {};
    thirdRouletteDict = {};
    fileContentArray;

    constructor(filePath) {
        const fileContentArray = (fs.readFileSync(filePath, { encoding: 'utf8' })).replace(/[^a-zA-Z ]/g, " ").split(' ');
        this.fileContentArray = fileContentArray.filter(function (el) {
            return el !== '';
        });

    }

    start(){
        console.log('Game starting')
        while (true) {
            let result = this.fillDictAndCheckIfWinner(this.firstRouletteDict);
            result = result || this.fillDictAndCheckIfWinner(this.secondRouletteDict);
            result = result || this.fillDictAndCheckIfWinner(this.thirdRouletteDict);
            if (result) break
        }
    }

    fillDictAndCheckIfWinner(dict) {
        const randomWord = this.fillDictWithRandomWord(dict);
        const isWinner = dict[randomWord] === 10
        if (isWinner)  {
            console.log('Game over!\nWinner:')
            console.log(dict)
            console.log(`With the word '${randomWord}'`)
            return true
        }
        return false
    }

    fillDictWithRandomWord(dict) {
        const randomWord = this.getRandomWord();
        if (!dict[randomWord]) {
            dict[randomWord] = 1;
        } else {
            dict[randomWord]++
        }
        return randomWord;
    }

    getRandomWord(){
        return this.fileContentArray[Math.round(Math.random() * this.fileContentArray.length)];
    }
}

const rouletteProgram = new RouletteProgram('book.txt');
rouletteProgram.start();