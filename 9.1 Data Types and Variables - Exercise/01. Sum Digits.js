function sumDigits(params) {
    let sum = 0;
    String(params).split('').forEach(element => {
        sum += Number(element);
    });
    console.log(sum);
}
sumDigits(245678);
sumDigits(543);

function sumDigits(params) {
    let sum = 0;
    while (params > 0) {
        let num = params % 10;
        sum += num;
        params = parseInt(params / 10);
    }
    console.log(sum);
}
sumDigits(245678);
sumDigits(543);

function sumDigits(params) {
    let sum = 0;
    String(params).split('').map(Number).forEach(element => {
        sum += element;
    });
    console.log(sum);
}
sumDigits(245678);
sumDigits(543);