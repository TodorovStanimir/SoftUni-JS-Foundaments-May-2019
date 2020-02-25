sortBy2Criteria = arr => {
    let output = arr.sort((a, b) => {
        if (a.length < b.length || a.length > b.length) {
            return a.length-b.length;
        } else {
            return a.localeCompare(b);
        }
    });
    console.log(output.join('\n'));
}
sortBy2Criteria(["alpha", "beta", "gamma"]);
sortBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);