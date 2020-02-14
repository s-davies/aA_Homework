document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const favoriteForm = document.getElementsByClassName("favorite-form")[0];
  favoriteForm.addEventListener("submit", event => {
    event.preventDefault();

    const favoriteInputEl = document.getElementsByClassName("favorite-input")[0];
    const favorite = favoriteInputEl.value;
    favoriteInputEl.value = "";

    const ul = document.getElementById("sf-places");

    const li = document.createElement("li");

    li.textContent = favorite;

    ul.appendChild(li);
  });


  // adding new photos

  // --- your code here!
  const showPhotoFormButton = document.getElementsByClassName("photo-show-button")[0];
  showPhotoFormButton.addEventListener("click", event => {
    // event.preventDefault();

    const photoForm = document.getElementsByClassName("photo-form-container")[0];
      photoForm.classList.toggle("hidden");

  });

  const photoForm = document.getElementsByClassName("photo-form")[0];
  photoForm.addEventListener("submit", event => {
    event.preventDefault();

    const photoInputEl = document.getElementsByClassName("photo-url-input")[0];
    const photo = photoInputEl.value;
    photoInputEl.value = "";

    const ul = document.getElementsByClassName("dog-photos")[0];

    const li = document.createElement("li");

    const img = document.createElement("img");

    img.src = photo;

    li.appendChild(img);
    ul.appendChild(li);
  });

});
