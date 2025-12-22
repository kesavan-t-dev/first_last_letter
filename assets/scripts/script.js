function validate_word() {
    const input = document.getElementById("user_input").value.trim();
    const resultMsg = document.getElementById("result_msg");
    
    const firstChar = input[0];
    const lastChar = input[input.length - 1];
        
    resultMsg.classList.add("d-none");
    resultMsg.classList.remove("alert-danger", "alert-success");

    
    if (input.length === 0) {
        show_error("Please enter a sentence");
        return;
    } else if (/[^a-zA-Z0-9\s]/.test(input)) {
        show_error("Special Character(s) not allowed");
        return;
    } else if (/\d/.test(input)) {
        show_error("Number(s) not allowed");
        return;
    } else if (input.includes(" ")) {
        show_error("Please enter only one word");
        return;
    } else if (input.length === 1) {
        show_error("Please enter more than one character");
        return;
    } else if (firstChar !== lastChar) {
        show_error("First and last character is not same");
        return;
    }

    resultMsg.innerText = "First and last character is same";
    resultMsg.classList.remove("d-none");
    resultMsg.classList.add("alert-success");
}

function show_error(message) {
    const resultMsg = document.getElementById("result_msg");
    resultMsg.innerText = message;
    resultMsg.classList.remove("d-none");
    resultMsg.classList.add("alert-danger");
}

function reset_form() {
    document.getElementById("user_input").value = "";
    document.getElementById("result_msg").classList.add("d-none");
}
