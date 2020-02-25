function triangleArea(siteA, siteB, siteC) {
    let s = (siteA + siteB + siteC) / 2;
    let area = Math.sqrt(s * (s - siteA) * (s - siteB) * (s - siteC))
    console.log(area);
}
triangleArea(2, 3.5, 4)