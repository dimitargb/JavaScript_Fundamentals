function detectValidEmojis(input) {
    let text = input.shift();
    let treshold = 1;
    let emojiCount = 0;
    let digitResults = text.matchAll(/[0-9]/g);
    let emojiMatches = text.matchAll(/(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g);
    let coolEmojies = [];

    for (const digitResult of digitResults) {
        let digit = Number(digitResult[0]);
        treshold *= digit;
    }
    console.log(`Cool threshold: ${treshold}`);

    for (const emoji of emojiMatches) {
        let emojiName = emoji.groups.name;
        // console.log(emojiName);
        // console.log(emoji[0]);
        emojiCount++;

        let emojiCoolnes = 0;
        for (let i = 0; i < emojiName.length; i++) {
            emojiCoolnes += emojiName.charCodeAt(i);
        }


        if (emojiCoolnes > treshold) {
            coolEmojies.push(emoji)
        }

    }
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    for (const emoji of coolEmojies) {
        console.log(emoji[0]);
    }
}
detectValidEmojis(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])