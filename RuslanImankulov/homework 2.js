
//Arrays race implementation
function addRandomNumberCountSum() {
    let sum = 0;
    return function innerFunc(arr){
        const randomNum = Math.floor(Math.random() * 101);
        arr.push(randomNum);
        sum += randomNum;
        if (sum >= 105) {
            arr.length = 0;
            sum = 0;
        };
        return sum;
    };
};

function twoArraysRace () {
    let arraysRace = new Promise( (resolve) => {
        let arr1 = [];
        let arr2 = [];
    
        const firstArrRace = addRandomNumberCountSum();
        const secondArrRace = addRandomNumberCountSum();
    
        while (true) {
            let sum = firstArrRace(arr1);
            if (sum >= 100){
                resolve(`Array 1 win\nArray: ${arr1}\nSum: ${sum}`);
                break;
            };
            sum = secondArrRace(arr2);
            if (sum >= 100){
                resolve(`Array 2 win\nArray: ${arr2}\nSum: ${sum}`);
                break;
            };
        };
    });
    arraysRace.then(function(value) {console.log(value)});
}

twoArraysRace();

