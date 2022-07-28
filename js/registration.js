/*checks if the radio button have been marked */
function validate() {
  let checked = false;
  const element = document.querySelectorAll('input[name="gender"]');
  for (let i = 0; i < element.length; i++) {
    if (element[i].checked) {
      checked = true;
    }
  }
  if (!checked) {
    alert("Campo sexo obrigatório.");
    return false;
  } else {
    window.location.href = "../html/test.html";
    return false;
  }
}
