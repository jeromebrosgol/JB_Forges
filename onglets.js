/*-------start menu-btn-------*/

let btn = document.querySelector(".header-menu--img");

btn.addEventListener('click', () => {

  let menu = document.querySelectorAll(".header-menu--btn");

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].classList.contains("hidden")) {
      menu[i].classList.remove("hidden")
    } else {
      menu[i].classList.add("hidden")
    }
  }
})

/*-------end menu-btn-------*/

/*-----start class active tab couronne----*/

let onglets = document.querySelectorAll(".tab");
let wrapper = document.querySelectorAll(".wrapper-active");

let index = 0;

onglets.forEach(onglet => {
  onglet.addEventListener('click', () => {
    if (
      onglet.classList.contains("tab-active")) {
      return
    } else {
      onglet.classList.add("tab-active")
    }

    index = onglet.getAttribute('data-tab');

    for (i = 0; i < onglets.length; i++) {

      if (onglets[i].getAttribute('data-tab')
        != index) {
        onglets[i].classList.remove("tab-active")
      }
    }

    for (j = 0; j < wrapper.length; j++) {

      if (wrapper[j].getAttribute('data-tab')
        != index) {
        /*!=different de*/
        wrapper[j].classList.add("wrapper-none");
        wrapper[j].classList.remove("wrapper-active");

      } else {

        wrapper[j].classList.add("wrapper-active");
        wrapper[j].classList.remove("wrapper-none");
      }
    }
  })
})

/*-----end class active tab couronne----*/

/*-----start class active tab plateau----*/

let ongletPlat = document.querySelectorAll(".tab-plateau");
let wrapperPlat = document.querySelectorAll(".wrapper-plateau");

let index1 = 0;

ongletPlat.forEach(ongletP => {
  ongletP.addEventListener('click', () => {
    if (
      ongletP.classList.contains("tab-plateau--active")) {
      return
    } else {
      ongletP.classList.add("tab-plateau--active")
    }

      index1 = ongletP.getAttribute('data-tabPlat');

    for (i = 0; i < ongletPlat.length; i++) {

      if (ongletPlat[i].getAttribute('data-tabPlat')
        != index1) {
          ongletPlat[i].classList.remove("tab-plateau--active")
    }
        
      }
    
    for (j = 0; j < wrapper.length; j++) {

      if (wrapperPlat[j].getAttribute('data-tabPlat')
        != index1) {
        /*!=different de*/
        wrapperPlat[j].classList.add("wrapper-plateau--none");
        wrapperPlat[j].classList.remove("wrapper-plateau");

      } else {

        wrapperPlat[j].classList.add("wrapper-plateau");
        wrapperPlat[j].classList.remove("wrapper-plateau--none");
      }
    }
  })
    
})
  

/*-----end class active tab plateau----*/