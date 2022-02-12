window.addEventListener('scroll', () => {
    if(window.scrollY > 10){
        document.querySelector('.Navbar').classList.add('small_navbar');
    }else{
        document.querySelector('.Navbar').classList.remove('small_navbar');
    }
})

// Navbar setting 
document.querySelector('#search_icon').addEventListener('click', () => {
    document.querySelector('.Navbar').classList.toggle('top');
});
document.querySelector('#x_icon').addEventListener('click', () => {
    document.querySelector('.Navbar').classList.toggle('top');
});