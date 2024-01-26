// Menu data structure
const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// FROM Task 5.1
let showingSubMenu = false;

// Task 1.0
// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");

// Task 1.1
// Set the background color of mainEl using the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";

// Hint: Assign a string that uses the CSS var() function like this:
// 'var(--main-bg)'

// Task 1.2
// Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

// Task 1.3
// Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");

// Hint: Element.classList API

// Progress Check:

// Task 2.0
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector("nav#top-menu");

// Task 2.1
// Set the height topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// Task 2.2
// Set the background color of topMenuEl using the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Task 2.3
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

// Task 3.0
// Copy the following data structure to the top of script.js:
// DONE

// Task 3.1
// Iterate over the entire menuLinks array and for each "link" object:
for (let link of menuLinks) {
  // Create an <a> element.
  // Hint: Research the document.createElement method.
  let aEl = document.createElement("a");
  // On the new element, add an href attribute with its value set to the href property of the "link" object.

  aEl.setAttribute("href", link.text);

  // Set the new element's content to the value of the text property of the "link" object.
  aEl.innerHTML = link.text;

  // Append the new element to the topMenuEl element.
  // Hint: Research the node.appendChild method.
  topMenuEl.appendChild(aEl);
}

// Task 4.0
// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.querySelector("nav#sub-menu");

// Task 4.1
// Set the height subMenuEl element to be 100%.
subMenuEl.style.height = "100%";

// Task 4.2
// Set the background color of subMenuEl using the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Task 4.3
// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

// Progress Check:

// Task 4.4
// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

// Task 4.5
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";

// Task 5.0
// Replace the menuLinks array in script.js with this version that adds sub-menu data:
//DONE

// Task 5.1
// Select and cache all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll("a");
console.log(topMenuLinks);

// Declare a global showingSubMenu variable and initialize it to false;

// Task 5.2
// Attach a delegated 'click' event listener to topMenuEl.

topMenuEl.addEventListener("click", handleClick);

function handleClick(event) {
  {
    // The first line of code of the event listener function should call the event object's preventDefault() method.
    event.preventDefault();

    // The second line of code function should immediately return if the element clicked was not an <a> element.
    if (event.target.tagName.toLowerCase() !== "a") {
      return;
    }
    // console.log the content of the <a> to verify the handler is working.
    console.log(`${event.target.innerHTML} is working properly`);

    // Task 5.3
    // This feature "deselects" the menu item if it's clicked when it's currently active, resulting in the sub-menu sliding up as well.

    // Next in the event listener, if the clicked <a> link has a class of active:

    // Remove the active class from the clicked <a> element.
    // Set the showingSubMenu to false.
    // Set the CSS top property of subMenuEl to 0.
    // return; from the event listener function.
    if (event.target.classList.contains("active")) {
      event.target.classList.remove("active");
      showingSubMenu = false;
      subMenuEl.style.top = "0";
      return;
    }
    // Task 5.4
    // Add code to the bottom of the the event listener that iterates over each <a> element in topMenuLinks and removes the class name of active, regardless of whether the <a> element has a class of active or not.
    // Hint: Removing a non-existent class from an element does not cause an error, so just remove it!
    for (let a of topMenuLinks) {
      a.classList.remove("active");
    }
    // Task 5.5
    // Next, the event listener should add a class name of active to the <a> element that was clicked.
    event.target.classList.add("active");

    //need to make clicked link access a menulink reference w/ same href
    var clickedLink = event.target;

    // Task 5.6
    // Next, add code in the event listener that sets showingSubMenu to true if the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false.

    // Hint: Saving the "link" object in a variable will come in handy for passing its subLinks array in Task 5.7

    // Progress Check
    // Clicking any of the links should make that link "active" and clear the others:

    // Clicking an "active" link should clear that link.

    // Task 5.7
    // Next in the event listener...

    // If showingSubMenu is true:

    const linkData = menuLinks.find((link) => {
      return link.text === clickedLink.text;
    });
    console.log(linkData.subLinks);
    console.log(clickedLink.text);
    showingSubMenu = linkData.subLinks;

    if (showingSubMenu) {
      buildSubMenu(linkData.subLinks);
      subMenuEl.style.top = "100%";
    } else {
      subMenuEl.style.top = "0%";
    }
  }
}

// Task 6.0
// Attach a delegated 'click' event listener to subMenuEl.

// The first line of code of the event listener function should call the event object's preventDefault() method.

// The second line of code function should immediately return if the element clicked was not an <a> element.

// console.log the content of the <a> to verify the handler is working.

// Task 6.1
// Next, subMenuEl's event listener should:

// Set showingSubMenu to false.
// Set the CSS top property of subMenuEl to 0.
// Task 6.2
// Next, subMenuEl's event listener should remove the class name of active from each <a> element in topMenuLinks - whether the active class exists or not.

// Task 6.3
// Next, subMenuEl's event listener should update the contents of mainEl to the contents of the <a> element, within an <h1>, clicked within subMenuEl.

subMenuEl.addEventListener("click", function (subEvent) {
  subEvent.preventDefault();
  if (subEvent.target.tagName.toLowerCase() !== "a") {
    return;
  }
  console.log("a");

  if (!showingSubMenu) {
    subMenuEl.style.top = "0%";
  }

  for (let a of topMenuLinks) {
    a.classList.remove("active");
  }

  let textToChange = document.querySelector("main h1");
  console.log(textToChange);

  textToChange.innerText = subEvent.target.text;
});

// Call a buildSubMenu function, passing to it the subLinks array for the clicked <a> element.
// Set the CSS top property of subMenuEl to 100%.
// Otherwise (showingSubMenu is false):

// Set the CSS top property of subMenuEl to 0.
// Since the About link has been clicked, set mainEl.innerHTML to '<h1>about</h1>'.
// Task 5.8
// Code the buildSubMenu function so that it:

// Clears the contents of subMenuEl.
// Iterates over the subLinks array passed as an argument; and for each "link" object:
// Create an <a> element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the subMenuEl element.
// Progress Check
// Take the menu for a test drive!

function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = "";
  subLinks.forEach((link) => {
    const subAEl = document.createElement("a");
    subAEl.setAttribute("href", link.href);
    subAEl.text = link.text;
    subMenuEl.appendChild(subAEl);
  });
}
