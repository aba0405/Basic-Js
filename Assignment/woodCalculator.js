function woodCalculator(chair, table, bed){
    var totalWoodForChair = chair * 6;
    var totalWoodForTable = table * 1;
    var totalWoodForBed = bed * 3;
    var totalWood = totalWoodForChair + totalWoodForTable + totalWoodForBed;
    return totalWood;
}

var result = woodCalculator(50, 8, 3);
console.log(result);