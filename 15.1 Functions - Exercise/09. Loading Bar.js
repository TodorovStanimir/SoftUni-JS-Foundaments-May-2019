function loadingBar(num) {
    let percent = num / 10;
    let points = 10 - percent;

    if (num < 100) {
        console.log(num + '% [' + '%'.repeat(percent) + '.'.repeat(points) + ']');
        console.log(`Still loading...`)
    } else if (num === 100) {
        console.log(`100% Complete!`)
        console.log('[%%%%%%%%%%]');
    }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);