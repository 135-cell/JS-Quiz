function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcomeForm"]["name"].value;
  
    sessionStorage.setItem("name", name);
    location.href = "quiz.html";
  
  }