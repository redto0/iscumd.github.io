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
        "We are the Dearborn difference™",
        "Hands-on Learning, Real World Impact",
        "Robotic googly eye innovators",
        "\"Do something worth being here for\"",
        "Home of Henry",
        "Education. Opportunity. Growth.",
        "Go Blue!",
        "Engineering solutions, not just robots",
        "Anderson connector enthusiasts",
        "Sometimes the things we build are smart",
        "Automation with a human touch",
        "Our karts race themselves",
        "Creators of the autonomous Desert Bus",
        "Robotics isn't a hobby, its a lifestyle",
        "Where every challenge is an opportunity",
        "Proud supporters of open source robotics"
    ];

    let index = Math.floor(Math.random() * sayings.length);
    let direction = 1; // 1 for forward, -1 for backward
    let tag = document.getElementById("splash-text");

    // noinspection InfiniteLoopJS
    while (true) {
         

        const saying = sayings[index]
        let current = "|"

        //Type each letter individually
        for (const l of saying) {
            current = current.slice(0, current.length - 1) + l + '|'
            tag.innerText = current
            await sleep(18) //22
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

            await sleep(13) //19
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

        // Move to the next index, either forward or backward
        index += direction;

        // If we reach the end or the beginning, reverse direction
        if (index >= sayings.length) {
            index = sayings.length - 2; // Avoid repeating last element
            direction = -1; // Reverse direction
        } else if (index < 0) {
            index = 1; // Avoid repeating first element
            direction = 1; // Forward direction
        }

    } //End while
} //End fn

/** Asynchronously sleeps, returning a promise. */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || 1000));
}