function sortAnArrayByTwoCriteria(input) {

    input.sort(compareLength);
    
    function compareLength(a, b) {
        if (a.length<b.length || a.length>b.length){
            return a.length-b.length;
        } else if (a.length===b.length){
            return a.localeCompare(b);
        }

    }
console.log(input.join('\n'));
}
sortAnArrayByTwoCriteria(["gamma", "alpha", "beta"]);
sortAnArrayByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortAnArrayByTwoCriteria(["Deny", "omen", "test", "Default"]);
