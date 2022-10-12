const input = document.querySelector(".input");
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

/**
 * CLOSE SEARCH BAR WHEN CLICK OUTSIDE
 * IDEA ADD CLICK EVENT TO DOCUMENT (WHOLE PAGE)
 * CHECK CLASSLIST OF CLICK EVENT
 * IF NULL, THEN THE CLICK IS OUTSIDE ELEMENT(MAYBE BETTER LOGIC HERE)
 * CHECK SEARCH BAR IS ACTIVE OR NOT
 * IF SO, TOGGLE ACTIVE CLASS
 */
document.addEventListener("click", (e) => {
  console.log(e.target.classList.value);
  console.log(search.classList.value);
  if (!e.target.classList.value) {
    if (search.classList.value === "search active") {
      search.classList.toggle("active");
    }
  }
});
