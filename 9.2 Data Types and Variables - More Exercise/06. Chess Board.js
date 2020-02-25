function chessBoard(params) {
    console.log('<div class="chessboard">');
    for (let div = 1; div <= params; div++) {
        console.log('  <div>');
        if (div % 2 !== 0) {
            for (let span = 1; span <= params; span++) {
                if (span % 2 !== 0) {
                    console.log('    <span class="black"></span>');
                } else {
                    console.log('    <span class="white"></span>');
                }
            }
        } else {
            for (let span = 1; span <= params; span++) {
                if (span % 2 !== 0) {
                    console.log('    <span class="white"></span>');
                } else {
                    console.log('    <span class="black"></span>');
                }
            }
        }
        console.log('  </div>');
    }
    console.log('</div>');
}
chessBoard(3);