//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

 

// ============= SIDEBAR =================

//remove active class from all menu items
const changeActiveItem = () =>{
    menuItems.forEach(item =>{
        item.classList.remove('active')
    })
}

menuItems.forEach(item =>{
    item.addEventListener('click', () =>{
        changeActiveItem ();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// =============== MESSAGE ===============
//searches chats
const searchMessage = () => {   
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        } else{
            user.style.display =  'none';
        }
    })
}


//search chat
messageSearch.addEventListener('keyup', searchMessage);

// hightlight messages card when messages menu is clicked
messagesNotification.addEventListener('click', ()=> {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none'
    setTimeout(()=> {
        messages.style.boxShadow = 'none';
    }, 2000);

})

//THEME/CUSTOMIZATION

const theme = document.getElementById('theme');
const themeModal = document.getElementById('customize-theme');

//opens modal
const openThemeModal = () =>{
    themeModal.style.display='absolute';
}
//closes modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}


//close modal
themeModal.addEventListener('click', closeThemeModal);

//opens modal
theme.addEventListener('click', openThemeModal);