document.getElementById('ocupacion').addEventListener('click', function() {
  if (this.textContent.includes('Alumno')) {
    this.innerHTML = '<strong>Ocupación:</strong> Alumna';
    alert('Se actualizó la ocupación a Alumna');
  } else {
    this.innerHTML = '<strong>Ocupación:</strong> Alumno';
    alert('Se actualizó la ocupación a Alumno');
  }
});