function postOffice(input) {
    let [firstPart, secondPart, thirdPart] = input[0].split('|');
    let pattern1 = /([#$%*&])([A-Z]+)\1/g;
    let pattern2 = /([\d]{2}):([\d]{2})/g;
    let chars = firstPart.match(pattern1)[0].substring(1, firstPart.match(pattern1)[0].length - 1).split('');
    let len = [];
    let lenChars = secondPart.match(pattern2).map(el => {
        let [char, len] = el.split(':');
        char = String.fromCharCode(char);
        len = Number(len);
        if (len >= 1 && len <= 20 && chars.includes(char)) {
            return [char, Number(len)];
        }
    }).filter(el => el);
    chars.forEach(char => {
        for (line of lenChars) {
            if (char === line[0]) {
                len.push(line[1]);
                break;
            }
        }
    });
    thirdPart = thirdPart.split(' ');
    chars.forEach((char,index) => {
        for (let word of thirdPart) {
            if (word[0] === char && word.length===len[index]+1) {
                console.log(word)
                break;
            }
        }
    })
}
postOffice(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s79:01d65:03ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'])
postOffice(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'])