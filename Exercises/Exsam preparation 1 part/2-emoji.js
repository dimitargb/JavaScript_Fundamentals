function emojiDetector(input) {

    let text = input.shift();
    let digitResults = text.matchAll(/[0-9]/g);
    let emojiMatches = text.matchAll(/(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g);
    let emojiCount = 0;
    let treshHold = 1;
    let coolEmojies = [];

    for (const digitResult of digitResults) {
        let digit = Number(digitResult[0]);
        treshHold *= digit;
    }
      
    for (const emojiMatch of emojiMatches) {
        let emoji = emojiMatch[0];
        let emojiName = emojiMatch.groups.name;
        emojiCount++;

        let emojiCoolnes = 0;

        for (let i = 0; i < emojiName.length; i++) {
            emojiCoolnes += emojiName.charCodeAt(i);
        }

        if (emojiCoolnes >= treshHold) {
            coolEmojies.push(emoji);
        }
    }
    console.log(`Cool threshold: ${treshHold}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);

    for (const coolEmoji of coolEmojies) {
        console.log(coolEmoji);
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])