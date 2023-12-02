const foodData = require("./food.json");

function listFood(category = '') {
    if (category.length > 0) {
        const filteredFood = foodData.filter((food) => food.category === category);
        console.log(`Food in category '${category}':`, filteredFood);
        return filteredFood;
    } else {
        console.log('All food:', foodData);
        return foodData;
    }
}

listFood("Protein");
listFood('Nuts');
listFood();

function sortCalorie(condition) {
    let sortedFood = [];
    if (condition === 'asec') {
        sortedFood = foodData.sort((a, b) => a.calorie - b.calorie);
        console.log('Sorted by calorie in ascending order:', sortedFood);
    } else if (condition === "desc") {
        sortedFood = foodData.sort((a, b) => b.calorie - a.calorie);
        console.log('Sorted by calorie in descending order:', sortedFood);
    }
    return sortedFood;
}

sortCalorie('asec');
sortCalorie('desc');

function sort(type) {
    let sortedFood = [];
    if (type === "protein") {
        sortedFood = foodData.sort((a, b) => b.proteins - a.proteins);
        console.log('Sorted by protein content:', sortedFood);
    } else if (type === "carb") {
        sortedFood = foodData.sort((a, b) => a.cab - b.cab);
        console.log('Sorted by carb content:', sortedFood);
    }
    return sortedFood;
}

sort('protein');
sort('carb');
