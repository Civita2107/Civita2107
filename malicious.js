console.log("Malicious script loaded!");

// Attempt to read a local file (e.g., secret.txt) via fetch
fetch("file:///secret.txt")
  .then(response => {
    if (response.ok) {
      return response.text();
    }
    throw new Error("Failed to read file");
  })
  .then(data => {
    console.log("File content:", data); // Logs content of secret.txt
    document.getElementById("result").innerText = "File read successfully:\n" + data;
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("result").innerText = "Error: " + error.message;
  });
// malicious.js
console.log("Malicious script loaded!");

// Attempt to read a local file (e.g., secret.txt) via fetch
fetch("file:///path/to/secret.txt")
  .then(response => {
    if (response.ok) {
      return response.text();
    }
    throw new Error("Failed to read file");
  })
  .then(data => {
    console.log("File content:", data); // Logs content of secret.txt
    document.getElementById("result").innerText = "File read successfully:\n" + data;
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("result").innerText = "Error: " + error.message;
  });

