document.getElementById("supplyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var age = parseFloat(document.getElementById("ageInput").value);
    var amountPerDay = parseFloat(document.getElementById("amountPerDayInput").value);
  
    if (isNaN(age) || isNaN(amountPerDay)) {
      alert("Please enter valid numbers for age and amount per day.");
      return;
    }
  
    var maxAge = 100; // Assuming a constant max age of 100 years
    var daysInYear = 365;
    var amountPerYear = amountPerDay * daysInYear;
    var yearsRemaining = maxAge - age;
    var totalAmountNeeded = Math.round(amountPerYear * yearsRemaining);
    var resultElement = document.getElementById("result");
    resultElement.textContent = "You will need " + totalAmountNeeded + " units to last you until the ripe old age of " + maxAge;
  });

  