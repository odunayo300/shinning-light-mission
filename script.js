function showFormResponse(success, message) {
  const responseDiv = document.getElementById('form-response');
  if (success) {
    responseDiv.className = 'form-response-success';
    responseDiv.innerHTML = '<i class="bi bi-check-circle-fill"></i> ' + message;
  } else {
    responseDiv.className = 'form-response-error';
    responseDiv.innerHTML = '<i class="bi bi-x-circle-fill"></i> ' + message;
  }
  responseDiv.style.display = 'flex';
}
