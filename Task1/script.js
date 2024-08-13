function validate(event) {
    event.preventDefault(); 

    const targetNumber = 40; 
    let num = document.getElementById("number").value.trim();  
    let msg = document.getElementById("msg");

    msg.style.color = "red";

    if (num === "") {
        msg.textContent = "Enter a number";
        return false;
    }

    num = Number(num);

    if (isNaN(num)) {
        msg.textContent = "Please enter a valid number";
        return false;
    }

    if (num < targetNumber) {
        msg.textContent = "Your guess is too low!";
    } else if (num > targetNumber) {
        msg.textContent = "Your guess is too high!";
    } else {
        msg.style.color = "green";
        msg.textContent = "Congratulations! You guessed the correct number.";

        
        setTimeout(() => {
            msg.textContent = "";
            document.getElementById("number").value = ""; 
        }, 3000); 
    }

    return false; 
}
