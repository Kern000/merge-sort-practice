function mergeSort(array){

    if (array.length <= 1){
        return array;
    }
    // base case in recursive function

    let middleIndex = Math.floor(array.length / 2);
    console.log('give me =>', middleIndex);
    
    let left = mergeSort(array.slice(0,middleIndex));
    let right = mergeSort(array.slice(middleIndex));

    let sortedValues = [];

    let leftIndexSlider = 0;
    let rightIndexSlider = 0;

    while (leftIndexSlider < left.length && rightIndexSlider < right.length){
        if (left[leftIndexSlider] < right[rightIndexSlider]){
            sortedValues.push(left[leftIndexSlider]);
            leftIndexSlider ++;
        }
        else {
            sortedValues.push(right[rightIndexSlider]);
            rightIndexSlider ++;
        }
    }

    // This attaches the remaining value from left and right

    sortedValues.push(...left.slice(leftIndexSlider));
    sortedValues.push(...right.slice(rightIndexSlider));
       
    return sortedValues;
}

// Test Case 1 //
const number = [4,5,7,8,10,1,2,5]
sortForMe = mergeSort(number);
console.log(sortForMe);

// Test Case 2 //
const number1 = [78, 60, 40, 20, 55, 800]
sortForMe2 = mergeSort(number1);
console.log(sortForMe2);




