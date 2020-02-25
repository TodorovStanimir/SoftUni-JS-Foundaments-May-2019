cutAndReverse = (string) => {
    let firstPartString = string.substr(0, string.length / 2);
    let secondPartString = string.substr(string.length / 2);

    [firstPartString, secondPartString].forEach(word => {
        console.log(word.split('').reverse().join(''));
    })
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')