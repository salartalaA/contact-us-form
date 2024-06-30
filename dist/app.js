const frm = document.querySelector("form");
const inp = document.querySelectorAll("input");
const txtArea = document.querySelector("textarea");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  let allFilled = true;
  inp.forEach((input) => {
    if (input.value.trim() === "") {
      allFilled = false;
    }
  });

  if (txtArea.value.trim() === "") {
    allFilled = false;
  }

  if (!allFilled) {
    Swal.fire({
      title: "Please fill all the blanks!",
      text: ":/",
      icon: "warning",
      confirmButtonText: "OK",
    });
  } else {
    Swal.fire({
      title: "You filled the form!",
      text: "Sent!",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      inp.forEach((input) => (input.value = ""));
      txtArea.value = "";
    });
  }
});
