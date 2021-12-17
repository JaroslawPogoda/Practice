const button = document.getElementById("dogBreedButton");
const dogBreedTextInput = document.getElementById("dogBreedInput");
const dogImageOutput = document.getElementById("dogImageOutput");
const dogBreedSelect = document.getElementById("dogBreedSelect");

function getListOfAllBreeds() {
  const url = "https://dog.ceo/api/breeds/list/all";
  fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
      breedArray = responseData.message;
      console.log(breedArray);
      
      for (let i = 0; i < Object.keys(breedArray).length; i++) {
        dogBreedSelect.innerHTML += `<option value="${
          Object.keys(breedArray)[i]
        }">${Object.keys(breedArray)[i]}</option>`;
      }
      
    });
  return;
}
getListOfAllBreeds();

dogBreedSelect.addEventListener("change", () => {
  let breed = dogBreedSelect.value;
  console.log(breed);
  const url = `https://dog.ceo/api/breed/${breed}/images/random`;

  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let dogPic = data.message;
      dogImageOutput.innerHTML = `<img src="${dogPic}"/>`;
    })
    .catch((error) => {
      console.log(error);
    });
});
