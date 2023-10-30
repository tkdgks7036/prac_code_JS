function solution(food) {
  let foodList = '';

  for (let i = 1; i < food.length; i++) {
    foodList += String(i).repeat(Math.floor(food[i] / 2));
  }

  return foodList + '0' + [...foodList].reverse().join('');
}