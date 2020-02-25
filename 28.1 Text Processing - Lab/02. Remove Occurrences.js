removeOccurences = (string, startingIndex, count) => {
    console.log(String(string).substring(Number(startingIndex), Number(count+1)));
}
removeOccurences("ASentance", 1, 8)