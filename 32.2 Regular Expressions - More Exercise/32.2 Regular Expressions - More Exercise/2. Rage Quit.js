function pageQuit1(input) {
    let pattern = /(?<word>[^\d]+?)(?<number>[\d]+)/g;
    let output = [];
    while ((line = pattern.exec(input[0])) !== null) {
            output.push(line.groups.word.toUpperCase().repeat(line.groups.number));
    }
    let uniqueSimbols = [...new Set(output.join(''))].length;
    console.log(`Unique symbols used: ${uniqueSimbols}`);
    console.log(output.join(''));
}
pageQuit1(['aSd2&5s@1']);
pageQuit1(['a3']);
pageQuit1(['e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15'])