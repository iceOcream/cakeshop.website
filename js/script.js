const menuBtn = document.querySelector('.menu');
// checklog
console.log('menuBtn', menuBtn) 
const navItem = document.querySelector('.nav-items');
// checklog
console.log('navItem', navItem)

menuBtn.addEventListener("click", function(){
    // alert('Menu button click');alerrtclick
    // console.log('hello click') checklog
    navItem.classList.toggle('show');
if(navItem.classList.contains('show')){ 
    menuBtn.src = './photo/icon/cross.svg';
} else {
    menuBtn.src = './photo/icon/menu.svg';
}
})
