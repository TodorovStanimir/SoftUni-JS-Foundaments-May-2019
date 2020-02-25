function companyUsers(input) {
    let companies = new Map();

    input.forEach(line => {
        let [company, employer] = line.split(' -> ');
        if (!companies.has(company)) {
            companies.set(company, [employer]);
        } else {
            if (!companies.get(company).includes(employer)) {
                companies.get(company).push(employer);
            }
        }
    });

    [...companies]
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(line => {
            console.log(line[0]);
            line[1].forEach(employer => {
                console.log(`-- ${employer}`);
            });
        });
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])