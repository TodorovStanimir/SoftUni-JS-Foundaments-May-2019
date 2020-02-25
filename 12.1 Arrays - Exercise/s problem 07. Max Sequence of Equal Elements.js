function maxSequenceOfEqualElements(arr) {
    let arr1 = [];
    if (arr.length === 1) {
        arr1 = arr[0].split(/[\ \, \ |\#\s]/).filter(x => x !== '');
    } else {
        while (arr.length>0){
            el=arr.shift();
            arr1.push(el);
        }        
    }
    let currentSequenceOfEqualsElements = [];
    currentSequenceOfEqualsElements[0] = arr1[0];
    let maxSequenceOfEqualsElements = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == arr1[i + 1]) {
            currentSequenceOfEqualsElements.push(arr1[i + 1])
            if (currentSequenceOfEqualsElements.length > maxSequenceOfEqualsElements.length) {
                maxSequenceOfEqualsElements = currentSequenceOfEqualsElements;
            }
        } else {
            currentSequenceOfEqualsElements = [];
            currentSequenceOfEqualsElements.push(arr1[i + 1]);
        }
    }
    console.log(maxSequenceOfEqualsElements.join(' '));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements(["1 1 1 2 3 1 3 3"]);
maxSequenceOfEqualElements(["4 4 4 4"]);
maxSequenceOfEqualElements(["1 1 1"]);
maxSequenceOfEqualElements(['0 1 1 5 2 2 6 3 3']);
maxSequenceOfEqualElements(["1 1 1 2 3 1 3 3"])