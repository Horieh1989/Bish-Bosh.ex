function runBishBosh() {
    const number = parseInt(document.getElementById("input").value);
   
    let output = '';

    for (let i = 1; i <= number; i++) {
        if (i % number === 0 ) {
            output += "Bish-Bosh, ";
        } else if (i % number === 3) {
            output += "Bish, ";
        } else if (i % number === 4) {
            output += "Bosh, ";
        } else {
            output += i + ", ";
        }
    }

    document.getElementById("output").textContent = output.slice(0, -2); // Remove the trailing comma and space
}
