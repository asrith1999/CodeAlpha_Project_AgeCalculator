function calculateAge() {
    // Get input values
    var dob = document.getElementById("dob").value;
    var mob = document.getElementById("mob").value;
    var yob = document.getElementById("yob").value;

    // Create a Date object for current date
    var currentDate = new Date();

    // Create a Date object for the input date of birth
    var inputDate = new Date(yob, mob - 1, dob); // Months are zero-based

    // Calculate age
    var age = currentDate.getFullYear() - inputDate.getFullYear();
    var monthDiff = currentDate.getMonth() - inputDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < inputDate.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById("result").innerHTML = "Your age is: " + age;
}
