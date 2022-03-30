const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

const hideAllcontents = () =>{
  contents.forEach((content) => content.classList.remove("show"));
  );
  const hideAllitems = () =>{
    listItems.forEach(item) => item.classList.remove ("active"));
  };

  listItems.forEach((item, index) =>{
    item.addEventListener("click", () => {
      hideAllContents ();
      hideAllItems();
      item.classList.add("active");
      content[index].classList.add("show");
    });
  });
}
