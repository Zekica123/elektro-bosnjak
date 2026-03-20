
  var form = document.getElementById("my-form");
  
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Hvala! Poruka je poslana.";
        form.reset(); // Čisti formu nakon slanja
      } else {
        status.innerHTML = "Ups! Došlo je do problema.";
      }
    }).catch(error => {
      status.innerHTML = "Ups! Došlo je do problema prilikom slanja.";
    });
  }
  
  form.addEventListener("submit", handleSubmit)
