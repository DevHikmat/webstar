const form = document.querySelector(".form");

form.addEventListener("submit", async (evt) => {
  evt.preventDefault();

  // Assuming you have input fields with IDs "branch_id", "phone", and "name"
  const phone = document.getElementById("phone").value;
  const name = document.getElementById("name").value;
  const button = document.querySelector(".button");

  const apiUrl = "https://api.modme.uz/v1/create_lead";
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const requestBody = {
    branch_id: 3995,
    phone: phone,
    name: name,
  };

  button.textContent = "Yuborilmoqda...";
  button.style.opacity = "0.5";
  button.setAttribute("disabled", true);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      // Handle success, e.g., show a success message
      console.log("Lead created successfully!");
    } else {
      // Handle errors, e.g., show an error message
      console.error(
        "Failed to create lead:",
        response.status,
        response.statusText
      );
    }
  } catch (error) {
    // Handle network errors
    console.error("Network error:", error);
  } finally {
    button.textContent = "Yuborildi";
    button.setAttribute("disabled", true);
  }
});
