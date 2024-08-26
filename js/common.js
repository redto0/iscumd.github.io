/**
 * This file contains scripts run on common elements.
 * All code should be executed in the async closure to ensure it works smoothly.
 *
 * @author Andrew Ealovega
 */

//Our blocking async 'main'
(async () => {
    let splashTask = splashtext()
    //Create other promises here and await them below to do other things in parallel.

    await splashTask
})()

/** Displays splash text under heading. Runs forever.*/
async function splashtext() {
    const sayings = [
        "\"Do something worth being here for\"",
        "Home of Henry",
        "Robotic googly eye innovators",
        "Anderson connector enthusiasts",
        "Sometimes the things we build are smart",
        "Our karts race themselves",
        "Go Blue!",
        "Engineering solutions, not just robots",
        "Robotics isn't a hobby, its a lifestyle",
        "Automation with a human touch",
        "Where every challenge is an opportunity",
        "Proud supporters of open source robotics",
        "Hands-on Learning, Real World Impact",
        "Education. Opportunity. Growth.",
        "We are the Dearborn difference™"
    ];

    let lastRand = 0
    let tag = document.getElementById("splash-text")

    // noinspection InfiniteLoopJS
    while (true) {
        //Cycle rand to avoid the same saying twice
        let rand
        while (true) {
            rand = Math.floor(Math.random() * sayings.length)
            if (rand !== lastRand) {
                break;
            }
        }
        lastRand = rand

        const saying = sayings[rand]
        let current = "|"

        //Type each letter individually
        for (const l of saying) {
            current = current.slice(0, current.length - 1) + l + '|'
            tag.innerText = current
            await sleep(22)
        }

        //Blink for a bit
        for (let i = 0; i < 8; i++) {
            if (i % 2 === 0) {
                tag.innerText = current.slice(0, current.length - 1) + ' '
            } else {
                tag.innerText = current
            }
            await sleep(400)
        }

        //'Erase' the word
        while (current.length > 2) {
            current = current.slice(0, current.length - 2) + '|'
            tag.innerText = current

            await sleep(19)
        }

        //Blink for a bit
        for (let i = 0; i < 4; i++) {
            if (i % 2 === 0) {
                tag.innerText = '|'
            } else {
                tag.innerText = ' '
            }
            await sleep(400)
        }

    } //End while
} //End fn

/** Asynchronously sleeps, returning a promise. */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || 1000));
}