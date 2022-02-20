window.addEventListener('scroll', () => {
    if(window.scrollY > 10){
        document.querySelector('.Navbar').classList.add('small_navbar');
    }else{
        document.querySelector('.Navbar').classList.remove('small_navbar');
    }
    if(window.scrollY > 500){
        document.getElementById("go_to_top").style.bottom = "5%";
    }else{
        document.getElementById("go_to_top").style.bottom = "-10%";
    }
})

// Navbar setting 
document.querySelector('#search_icon').addEventListener('click', () => {
    document.querySelector('.Navbar').classList.toggle('top');
});
document.querySelector('#x_icon').addEventListener('click', () => {
    document.querySelector('.Navbar').classList.toggle('top');
});