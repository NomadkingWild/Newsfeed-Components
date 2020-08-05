// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
const menu = document.querySelector('menuItems')

function menuMaker(menuObj){
  const menu = document.createElement("div")
  const list = document.createElement("ul")
  const item1 = document.createElement("li")
  const item2 = document.createElement("li")
  const item3 = document.createElement("li")

  menu.appendChild(list)
  menu.appendChild(item1)
  menu.appendChild(item2)
  menu.appendChild(item3)

  menu.className ="Menu"

  item1.textContent = menuItems[1]
  item2.textContent = menuItems[2]
  item3.textContent = menuItems[3]

  menuButton.addEventListener("click", event=>{
    menu.classList.toggle('menu-open')
    menu.classList.toggle('toggle-on')
  })
  return menu
}
const theDummyMenu = menuMaker({menuItems[1]: "Chicken", menuItems[2]:'Mashed Potatoes', menuItems[3]:"peas"})
menu.appendChild(theDummyMenu)

menuItems.forEach(menuObj =>{
  const theMenu = menuMaker(menuObj)
  menu.appendChild(theMenu)
})
function menu(props){
  return(
    <div>
    <ul>
      <li>{props.menuItems[1]}</li>
      <li>{props.menuItems[2]}</li>
  <li>{props.menuItems[3]}</li>
    </ul>
  </div>
  )
}