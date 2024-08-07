import './css/style.css'

// allow menu to show on click or on hover

// menu items on html, reveal/hide on js

// reusable! make a dropdown class with hover and click children through inheritance or composition?

class DropDown {
  static onClick() {
    const dropdownItems = document.getElementsByClassName("dropdown")
    console.log('works')
    for (let i = 0; i < dropdownItems.length; i++) {
      const dropdown = dropdownItems[i]
      const dropdownMenu = dropdown.getElementsByClassName('dropdown-menu')[0]
      dropdown.addEventListener('click', () => {
        dropdownMenu.classList.toggle("visable")
      })  
    }
  }

  static onHover() {
    const dropdownItems = document.getElementsByClassName("dropdown")

    for (let i = 0; i < dropdownItems.length; i++) {
      const dropdown = dropdownItems[i]
      const dropdownMenu = dropdown.getElementsByClassName('dropdown-menu')[0]
      dropdown.onmouseenter = () => {
        dropdownMenu.classList.add("visable")
      }
    }
  }
}

DropDown.onClick()