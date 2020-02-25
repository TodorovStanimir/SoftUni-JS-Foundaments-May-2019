function charactersInRange(char1, char2) {
    let output = '';
    for (let i = Math.min(char1.charCodeAt(), char2.charCodeAt()) + 1; i < Math.max(char1.charCodeAt(), char2.charCodeAt()); i++) {
        output += String.fromCharCode(i) + ' ';
    }
    console.log(output.trim());
}
charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');