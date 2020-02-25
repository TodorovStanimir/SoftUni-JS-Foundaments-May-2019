function zad3(input) {
    let users = {};
    let maxMesages = parseInt(input.shift());
    while ((line = input.shift()) !== 'Statistics') {
        let command = line.split('=')[0];
        if (command === 'Add') {
            let [comm, user, sent, received] = line.split('=');
            if (!users[user]) {
                users[user] = { sent: Number(sent), received: Number(received) };
            }
        } else if (command === 'Message') {
            let [comm, sender, receiver] = line.split('=');
            if (users[sender] && users[receiver]) {
                if (users[sender].sent + users[sender].received+1 === maxMesages) {
                    delete users[sender];
                    console.log(`${sender} reached the capacity!`);
                } else {
                    users[sender].sent++;
                }
                if (users[receiver].received + users[receiver].sent + 1 === maxMesages) {
                    delete users[receiver];
                    console.log(`${receiver} reached the capacity!`);
                } else {
                    users[receiver].received++;
                }
            }
        } else if (command === 'Empty') {
            let [comm, userName] = line.split('=');
            if (userName === 'All') {
                for (let user in users) {
                    delete users[user];
                }
            } else {
                if (users[userName]) {
                    delete users[userName];
                }
            }
        }
    }
    let result = Object.entries(users);
    console.log(`Users count: ${result.length}`);
    result.sort((a, b) => b[1].received - a[1].received || a[0].localeCompare(b[0])).forEach(user => {
        console.log(`${user[0]} - ${user[1].sent + user[1].received}`);
    })
}
zad3(['10',
    'Add=Mark=5=4',
    'Add=Clark=3=5',
    'Add=Berg=9=0',
    'Add=Kevin=0=0',
    'Message=Berg=Kevin',
    'Statistics']);
zad3(['20',
    'Add=Mark=3=9',
    'Add=Berry=5=5',
    'Add=Clark=4=0',
    'Empty=Berry',
    'Add=Blake=9=3',
    'Add=Michael=3=9',
    'Add=Amy=9=9',
    'Message=Blake=Amy',
    'Message=Michael=Amy',
    'Statistics']);
zad3(['12',
    'Add=Bonnie=3=5',
    'Add=Johny=4=4',
    'Empty=All',
    'Add=Bonnie=3=3',
    'Statistics']);