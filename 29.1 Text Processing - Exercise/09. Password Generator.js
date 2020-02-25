passwordGenerator = (string) => {
    let newChars = string[2]
        .toUpperCase()
        .split('')
    let indexNewChars = 0;
    let password = string[0]
        .concat(string[1])
        .toLowerCase()
        .split('')
        .map(char => {
            if (char === 'a' || char === 'e' ||
                char === 'i' || char === 'o' || char === 'u') {
                let index = indexNewChars;
                if (indexNewChars === newChars.length) {
                    indexNewChars = 1;
                    index = 0;
                } else {
                    indexNewChars++;
                }
                return newChars[index];
            } else {
                return char;
            }
        })
        .reverse()
        .join('');

    console.log(`Your generated password is ${password}`);
}
passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);