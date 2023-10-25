function runBishBosh() {
    const number = parseInt(document.getElementById("input").value);
    const bishValue = parseInt(document.getElementById("bish").value);
    const boshValue = parseInt(document.getElementById("bosh").value);
   
    let output = '';

    for (let i = 1; i <= number; i++) {
        if (i % number === 0 ) {
            output += "Bish-Bosh, ";
        } else if (i % bishValue === 0) {
            output += "Bish, ";
        } else if (i % boshValue === 0) {
            output += "Bosh, ";
        } else {
            output += i + ", ";
        }
    }
    console.log(output);
    document.getElementById("output").textContent = output.slice(0, -2); // Remove the trailing comma and space
}
