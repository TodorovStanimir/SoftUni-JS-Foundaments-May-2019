function condenceArrayOfNumber(arr) {
    while (arr.length > 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i] + arr[i + 1];
        }
        arr.splice(arr.length - 1, 1);
    }
    console.log(Number(arr[0]));
}
condenceArrayOfNumber([2, 10, 3]);
condenceArrayOfNumber([5, 0, 4, 1, 2]);
condenceArrayOfNumber([1]);