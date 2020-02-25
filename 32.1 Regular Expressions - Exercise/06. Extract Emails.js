function extractEmails(string) {
    let pattern = /[\s]{1}[a-z]+[.\|\-\|_]?[a-z]+@[a-z]+[-]?[a-z]+[.]{1}[a-z]+[.]?[a-z]+/gmi;
    listEmails = []
    while ((email = pattern.exec(string[0]))!==null) {
        listEmails.push(email[0].trim());
    }
    
    console.log(listEmails.join('\n'));
}
extractEmails(['Please contact us at: support@github.com.', 'end']);
extractEmails(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.']);
extractEmails(['Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.'])