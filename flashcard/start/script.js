(async () => {
    const res = await fetch('http://localhost:3000/flashcard/start/?name=something')
    const test = await res.json();
    console.log(test, "hello from /start/script.js")
})()