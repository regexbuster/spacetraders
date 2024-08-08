for (let i = 1; i <= 425; i++) {
    let val = parseInt((i / 425) * 10);

    console.log(`${'█'.repeat(val)}${'░'.repeat(10 - val)} ${val}/10 ${i}/425`);
}
