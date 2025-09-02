const menuOpen = document.querySelector('.menu-open')
const menuClose = document.querySelector('.menu-close')
const links = document.querySelector('.links')

menuOpen.addEventListener('click', () => {
    menuOpen.classList.add('active')
    menuClose.classList.add('active')
    links.classList.add('active')
})

menuClose.addEventListener('click', () => {
    menuOpen.classList.remove('active')
    menuClose.classList.remove('active')
    links.classList.remove('active')
})


const navLinks = document.querySelectorAll('.nav-links')
const navItem = document.querySelectorAll('.nav-item')

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const parent = link.parentElement
        e.preventDefault()
        //close other item

        navItem.forEach(item => {
          
                if (item !== parent) {
                    item.classList.remove('active')
                }

          
            //toggle current dropdown
            parent.classList.toggle('active')
        })


    })
})

//close if click outside
document.addEventListener('click', (e)=>{
    if(!e.target.closest('.nav-item')){
        navItem.forEach(item =>{
            item.classList.remove('active')
        })
    }
})