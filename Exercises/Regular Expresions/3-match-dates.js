function matchDate(input) {
    let text = input.shift();
    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z]{1}[a-z]{2})\2(?<yaer>\d{4})\b/g;

    let matches = text.matchAll(pattern);

    for (const mach of matches) {
        console.log(`Day: ${mach.groups.day}, Month: ${mach.groups.month}, Year: ${mach.groups.yaer}`);
        //console.log(`Day: ${mach[1]}, Month: ${mach[3]}, Year: ${mach[4]}`);
    }

}
matchDate(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])