function netherRealms(input) {
    let demons = {};
    input = String(input[0]).split(',').map(demon => demon.trim());
    let patternHealth = /[^0-9+\-*/.]/g;
    let patternDamage = /[-\|+]?[0-9]+[.]?[0-9]*/g;

    for (let demon of input) {
        let health = 0;
        let damage = 0;
        if (demon.match(patternHealth)) {
            health = demon.match(patternHealth).map(x => x.charCodeAt()).reduce((a, b) => a + b, 0);
        }
        let multiplication = demon.split('').filter(x => (x === '*' || x === '/'));
        
        if (demon.match(patternDamage)) {
            damage = demon.match(patternDamage).map(Number).reduce((a, b) => a + b, 0);
        }
        multiplication.forEach(element => (element === '*') ? damage *= 2 : damage /= 2);

        demons[demon] = {
            health,
            damage
        }

    }
    Object.entries(demons)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(demon => {
            console.log(`${demon[0]} - ${demon[1].health} health, ${demon[1].damage.toFixed(2)} damage `)
        });
}
netherRealms(['M3ph-0.5s-0.5t0.0**']);
netherRealms(['M3ph1st0**,    Azazel']);
netherRealms(['Gos/ho']);