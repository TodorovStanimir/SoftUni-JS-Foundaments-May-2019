function thePyramidOfKingDjoser(base, increment) {
    let [stone, marble, lapis, gold, counterRowForLapis, heigh] = [0, 0, 0, 0, 0, 0];
    
    let lastElement = 1;

    if (base % 2 === 0) {
        lastElement = 2;
    }

    for (let i = base; i >= lastElement; i -= 2) {
        heigh++;
        counterRowForLapis++;
        if (i !== lastElement) {
            stone += (i - 2) * (i - 2) * increment;
        }
        if (counterRowForLapis === 5 && i !== lastElement) {
            lapis += (4 * i - 4) * increment;
            counterRowForLapis = 0;
        } else {
            if (i !== lastElement) {
                marble += (4 * i - 4) * increment;
            } else {
                gold = lastElement * lastElement * increment;
            }
        }
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(heigh*increment)}`);
}
thePyramidOfKingDjoser(11, 1);
thePyramidOfKingDjoser(11, 0.75);
thePyramidOfKingDjoser(12, 1);
thePyramidOfKingDjoser(23, 0.5);