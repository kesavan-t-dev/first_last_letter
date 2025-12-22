function validateWord() {
    const input = document.getElementById("user_input").value.trim();
    const resultMsg = document.getElementById("result_msg");

         resultMsg.classList.add("d-none");
          resultMsg.classList.remove("alert-danger", "alert-success");

    
        if (input.length === 0) {
            showError("Please enter a sentence");
            return;
        }
    
        if (/[^a-zA-Z0-9\s]/.test(input)) {
            showError("Special Character(s) not allowed");
            return;
        }

        if (/\d/.test(input)) {
            showError("Number(s) not allowed");
            return;
        }

        if (input.includes(" ")) {
            showError("Please enter only one word");
            return;
        }

    if (input.length === 1) {
        showError("Please enter more than one character");
        return;
    }

    
    const firstChar = input[0];
    const lastChar = input[input.length - 1];

    if (firstChar !== lastChar) {
        showError("First and last character is not same");
        return;
    }

    resultMsg.innerText = "First and last character is same";
    resultMsg.classList.remove("d-none");
    resultMsg.classList.add("alert-success");
}

function showError(message) {
    const resultMsg = document.getElementById("result_msg");
    resultMsg.innerText = message;
    resultMsg.classList.remove("d-none");
    resultMsg.classList.add("alert-danger");
}

function resetForm() {
    document.getElementById("user_input").value = "";
    document.getElementById("result_msg").classList.add("d-none");
}
