const input = document.getElementById("search");
input.addEventListener("input", search);

function search() {
  const inputValue = input.value.trim().toLowerCase();
  const lis = document.querySelectorAll("li");

  lis.forEach(li => {
    const text = li.textContent.trim().toLowerCase();
    li.style.display = text.includes(inputValue) ? "" : "none";
  });
}
