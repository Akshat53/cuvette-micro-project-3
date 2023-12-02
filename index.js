const foodData = require('./food.json');
 
function listFoodData(food){
    if (food.length>0){
        return foodData.filter((food)=>food.category === food)
    }
    else{
        foodData
    }
}
listFoodData('Protein');
listFoodData('Nuts');
listFoodData();