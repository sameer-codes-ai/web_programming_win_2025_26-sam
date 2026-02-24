function displayClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();

    console.clear();   // Clear previous output
    console.log(time); // Show current time
}

setInterval(displayClock, 1000);