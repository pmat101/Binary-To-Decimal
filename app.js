document.querySelector("form").addEventListener("submit", function (e) {
    // SUBMIT event works on the whole form, not just the submit button

    e.preventDefault();
    // prevents form from submitting and page reloading
});

document.querySelector(".container .btn").addEventListener("click", function () {
    let binary = document.querySelector("#binary").value;
    document.querySelector(".container .row .result").innerText = "Decimal Number : " + parseInt(binary, 2);
    /*
        A radix parameter specifies the number system to use:

        2 = binary, 8 = octal, 10 = decimal (default), 16 = hexadecimal.
    */
});
