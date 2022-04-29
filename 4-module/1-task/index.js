function makeFriendsList(friends) {
  let ul = document.createElement("ul");
  for (let { firstName, lastName } of friends) {
    ul.insertAdjacentHTML("beforeend", `<li>${firstName} ${lastName}</li>`);
  }
  return ul;
}
