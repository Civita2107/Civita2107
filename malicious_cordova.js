// Create visual elements to display results
document.addEventListener('DOMContentLoaded', function() {
  // Create container for output if it doesn't exist
  if (!document.getElementById('result')) {
    const resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    resultDiv.style.padding = '10px';
    resultDiv.style.margin = '10px';
    resultDiv.style.border = '1px solid #ccc';
    resultDiv.style.backgroundColor = '#f8f8f8';
    document.body.appendChild(resultDiv);
  }
  
  // Status message
  document.getElementById('result').innerHTML = "Attempting to read file...";
  
  // Attempt to read the file
  fetch("file:///android_asset/www/index.html")
    .then(response => {
      document.getElementById('result').innerHTML += "<br>Response received. Status: " + response.status;
      if (response.ok) {
        return response.text();
      }
      throw new Error("Failed to read file with status: " + response.status);
    })
    .then(data => {
      // Display the content on screen
      document.getElementById('result').innerHTML += 
        "<br><br><strong>File content:</strong><br><pre>" + 
        data.replace(/</g, "&lt;").replace(/>/g, "&gt;") + 
        "</pre>";
    })
    .catch(error => {
      // Display error on screen
      document.getElementById('result').innerHTML += 
        "<br><br><strong>Error:</strong> " + error.message;
    });
});
