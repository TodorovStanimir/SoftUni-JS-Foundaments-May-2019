searchForANumber = (arr1, arr2) => {
    let result = arr1
        .splice(0, arr2[0])
        .splice(arr2[1])
        .filter(x => x === arr2[2])
        .length
        
    console.log(`Number ${arr2[2]} occurs ${result} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);