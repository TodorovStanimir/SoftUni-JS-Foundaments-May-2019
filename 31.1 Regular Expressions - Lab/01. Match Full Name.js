function matchFullName(input) {
    console.log(input[0].match(/\b[A-Z]{1}[a-z]+ [A-Z][a-z]+\b/g).join(' '));
}
matchFullName(['Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov']);