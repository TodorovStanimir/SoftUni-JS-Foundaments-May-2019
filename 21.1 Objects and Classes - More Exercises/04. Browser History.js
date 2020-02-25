function browserHistory(input, arr) {
    arr.forEach(element => {
        let command = element.split(' ')[0];
        let site = element.split(' ').slice(1).join(' ');
        if (command === 'Open') {
            input['Open Tabs'].push(site);
            input['Browser Logs'].push(element);
        } else if (command === 'Close') {
            if (input['Open Tabs'].indexOf(site) !== -1) {
                input['Open Tabs'].splice(input['Open Tabs'].indexOf(site), 1);
                input['Browser Logs'].push(element);
                input['Recently Closed'].push(site);
            }
        } else if (element === 'Clear History and Cache') {
            input['Open Tabs'] = [];
            input['Browser Logs'] = [];
            input['Recently Closed'] = [];
        }
    });
    Object.entries(input).forEach((elem, index) => {
        (index === 0) ? console.log(`${elem[1]}`) : console.log(`${elem[0]}: ${elem[1].join(', ')}`);
    });
}
browserHistory({
    'Browser Name': 'Google Chrome',
    'Open Tabs': ['Facebook', 'YouTube', 'Google Translate'],
    'Recently Closed': ['Yahoo', 'Gmail'],
    'Browser Logs':
        ['Open YouTube',
            'Open Yahoo',
            'Open Google Translate',
            'Close Yahoo',
            'Open Gmail',
            'Close Gmail',
            'Open Facebook']
}, ['Close Facebook', 'Open StackOverFlow', 'Open Google']);
browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)