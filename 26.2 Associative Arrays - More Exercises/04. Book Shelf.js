function bookShelf(input) {
    let listShelfs = {};
    input.forEach(line => {
        if (line.includes(' -> ')) {
            let [numberShelf, genre] = line.split(' -> ');
            numberShelf = Number(numberShelf);
            if (!(numberShelf in listShelfs)) {
                listShelfs[numberShelf] = {};
                listShelfs[numberShelf][genre] = [];
            }
        } else {
            let [book, genre] = line.split(', ');
            let [title, author] = book.split(': ')
            for (let key in listShelfs) {
                if (genre in listShelfs[key]) {
                    listShelfs[key][genre].push({ [title]: author });
                }
            }

        }
    });
    Object.entries(listShelfs)
        .sort((a, b) => Object.values(b[1])[0].length - Object.values(a[1])[0].length)
        .forEach(line => {
            console.log(`${line[0]} ${Object.keys(line[1])[0]}: ${Object.values(line[1])[0].length}`)
            Object.values(line[1])[0]
                .sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]))
                .forEach((book) => {
                    console.log(`--> ${Object.keys(book)}: ${Object.values(book)}`)
                });
        });
}
bookShelf(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'])