countStringOccurrences = (string, searchedWord) => {
    console.log(string.split(' ').filter(word => word === searchedWord).length)
}
countStringOccurrences("This is a word and it also is a sentence", "is")