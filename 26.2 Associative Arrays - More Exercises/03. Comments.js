comment = (input) => {
    let listUsers = [];
    let listArticles = {};
    input.forEach(line => {
        if (line.startsWith('user ')) {
            let userName = line.split('user ').filter(el => el !== '')[0];
            listUsers.push(userName);
        } else if (line.startsWith('article ')) {
            let articleName = line.split('article ').filter(el => el !== '');
            listArticles[articleName] = [];
        } else {
            let [userName, tokens] = line.split(' posts on ');
            let [articleName, tokens1] = tokens.split(': ');
            let [commentTitle, commentContence] = tokens1.split(', ');
            if (listUsers.includes(userName) && listArticles.hasOwnProperty(articleName)) {
                listArticles[articleName].push({ [userName]: { [commentTitle]: commentContence } })
            }
        }
    });
    Object.entries(listArticles)
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(element => {
            console.log(`Comments on ${element[0]}`);
            element[1]
                .sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]))
                .forEach(line => {
                    console.log(`--- From user ${Object.keys(line)[0]}: ${Object.keys(Object.values(line)[0])[0]} - ${Object.values(Object.values(line)[0])[0]}`);
                });
        });
}
comment(['user aUser123',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'])