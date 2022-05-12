const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];

function addContacts() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 50000; i++) {
    const child = document.createElement("div");
    child.textContent = i;
    child.classList.add("contact");
    fragment.appendChild(child);
  }
  contacts.appendChild(fragment);
}

currScroll = 0
prevScroll = 0
currIndex = 0
contacts.addEventListener("scroll", (e) => {
  const items = Array.from(contacts.getElementsByClassName("contact"));
  сurrIndex = contacts.scrollTop - prevScroll >= 0 ? currIndex+=3 : currIndex-=3
  stickyHeader.textContent = items[currIndex].textContent;
  prevScroll = contacts.scrollTop
  // const itemOffsets = items.map((item) => item.offsetTop);
  // const topItemIndex = itemOffsets.findIndex(
  //   (offset) => contacts.scrollTop - offset <= -18
  // );
  // if (topItemIndex !== -1) {
  //   stickyHeader.textContent = items[topItemIndex].textContent;
  // }
  
});

addContacts();