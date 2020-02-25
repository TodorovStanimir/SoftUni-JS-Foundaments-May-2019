function foreignLanguage(country) {
    let language = {
        USA: 'English',
        England: 'English',
        Spain: 'Spanish',
        Argentina: 'Spanish',
        Mexico: 'Spanish'
    }
    console.log(language[country] !== undefined ? language[country] : 'unknown')
}
foreignLanguage('USA');
foreignLanguage('Germany');