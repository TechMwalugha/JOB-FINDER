const showAsideBarButton = document.getElementById('show-asidebar')
const closeAsideBarButton = document.getElementById('closeAsideBar')
const asideBar = document.getElementById('asidebar')

showAsideBarButton.addEventListener('click', () => {
    asideBar.classList.toggle('show')
})

closeAsideBarButton.addEventListener('click', () => {
    asideBar.classList.remove('show')
})