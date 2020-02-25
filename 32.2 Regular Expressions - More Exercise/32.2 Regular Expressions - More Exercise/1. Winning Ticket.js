function winningTicket(input) {
    let arrSimbols = ['@', '#', '$', '^']
    let regex = /[@]{6,10}|[#]{6,10}|[$]{6,10}|[\^]{6,10}/g;

    String(input).split(',')
        .map(el => el.trim())
        .forEach(ticket => {
            if (ticket.length !== 20) {
                console.log('invalid ticket');
            } else {
                let firstHalf = '';
                let secondHalf = '';
                let ticketIsNotValid = true;

                if (ticket.substring(0, 10).match(regex)) firstHalf = ticket.substring(0, 10).match(regex)[0];
                
                if (ticket.substring(10, 20).match(regex)) secondHalf = ticket.substring(10, 20).match(regex)[0];

                arrSimbols.forEach(simbol => {
                    let countSpecialSimbolInFirstHalf = firstHalf
                        .split('')
                        .filter(el => el === simbol)
                        .length;
                    let countSpecialSimbolInSecondHalf = secondHalf
                        .split('')
                        .filter(el => el === simbol)
                        .length;

                    let counterSpecialSimbols = Math.min(countSpecialSimbolInFirstHalf, countSpecialSimbolInSecondHalf);

                    if (counterSpecialSimbols >= 6 && counterSpecialSimbols <= 9) {
                        console.log(`ticket "${ticket}" - ${counterSpecialSimbols}${simbol}`);
                        ticketIsNotValid = false;
                    }

                    if (counterSpecialSimbols === 10) {
                        console.log(`ticket "${ticket}" - 10${simbol} Jackpot!`);
                        ticketIsNotValid = false;
                    }
                });

                if (ticketIsNotValid) console.log(`ticket "${ticket}" - no match`);
            }
        });
}