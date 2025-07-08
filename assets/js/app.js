let userInput = document.getElementById('emailInput');



document.getElementById('submitButton').addEventListener('click', function() {
  const form = document.getElementById('myForm');

  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validationResult = pattern.test(userInput);
  console.log(validationResult);

  if (validationResult === false) {
    console.log("Hello Mr. Noyes")

  } else (
    console.log("No Mr. Noyes")
  )

});
