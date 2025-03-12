function convertToBinary()
{
    let decimalNumber = document.getElementById("decimalInput").value;

    if (isNaN(decimalNumber) || decimalNumber === "") {
        document.getElementById("binaryResult").innerText = null;
        return;
    }
    decimalNumber = parseInt(decimalNumber, 10);

    if (decimalNumber < 0) {
        document.getElementById("binaryResult").innerText = null;
        return;
    }

    let binaryNumber = decimalNumber.toString(2);
    document.getElementById("binaryResult").innerText = binaryNumber;
}