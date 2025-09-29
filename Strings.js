// Function runs when user submits the form
function validateForm() {
    // Get first and last name values
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;

    // Combine them into one string with a space
    let fullName = firstName + " " + lastName;

    // Get zip code input
    let zip = document.getElementById("zip").value;

    // Reference to output area
    let outputDiv = document.getElementById("output");

    // Reset output each time
    outputDiv.innerHTML = "";

    // Check if full name is too long
    if (fullName.length > 20) {
        outputDiv.innerHTML = "⚠️ Name too long! Must be 20 characters or fewer.";
        return false; // stop program
    }

    // Check if zip code is exactly 5 digits
    if (!/^\d{5}$/.test(zip)) {
        outputDiv.innerHTML = "⚠️ Invalid zip code! Must be exactly 5 digits.";
        return false; // stop program
    }

    // If both checks pass, show secret message
    outputDiv.innerHTML = "🎉 Access Granted! <br> The secret message is: <b>'Pico Rules the Galaxy!'</b>";

    // Return false to prevent form refresh
    return false;
}
// Function runs when user submits the form
function validateForm() {
    // Get first and last name values
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;

    // Combine them into one string with a space
    let fullName = firstName + " " + lastName;

    // Get zip code input
    let zip = document.getElementById("zip").value;

    // Reference to output area
    let outputDiv = document.getElementById("output");

    // Reset output each time
    outputDiv.innerHTML = "";

    // Check if full name is too long
    if (fullName.length > 20) {
        outputDiv.innerHTML = "⚠️ Name too long! Must be 20 characters or fewer.";
        return false; // stop program
    }

    // Check if zip code is exactly 5 digits
    if (!/^\d{5}$/.test(zip)) {
        outputDiv.innerHTML = "⚠️ Invalid zip code! Must be exactly 5 digits.";
        return false; // stop program
    }

    // If both checks pass, show secret message
    outputDiv.innerHTML = "🎉 Access Granted! <br> The secret message is: <b>'Pico Rules the Galaxy!'</b>";

    // Return false to prevent form refresh
    return false;
}
