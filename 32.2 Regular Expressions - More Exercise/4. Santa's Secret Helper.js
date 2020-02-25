function santasSecretHelper(input) {
    let key = Number(input.shift());
    for (let encryptedMessage of input) {
        if (encryptedMessage === 'end') {
            break;
        }
        let decreptedMessage = encryptedMessage.split('').map(el => String.fromCharCode(el.charCodeAt(0) - key)).join('');
        let pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]+!(?<type>G|N)!/g;
        if (decreptedMessage.match(pattern)) {
            let correctLine = pattern.exec(decreptedMessage);
            if (correctLine.groups.type === 'G') {
                console.log(`${correctLine.groups.name}`);
            }
        }
    }
}
santasSecretHelper(['3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejn$J$',
    'CVwdq&gnmjkvng$Q$',
    'end'])
santasSecretHelper(['4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    'Wonvfkmwzkmpwvzkm\'lhjnlDWeqerxle0wlnzj{nz%K%nohwn',
    'DReh}e=<4lhzj1%K%',
    'end'])
santasSecretHelper(['3',
    'N}eideidmk$\'(mnyenmCNlpamnin$J$',
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end'])
