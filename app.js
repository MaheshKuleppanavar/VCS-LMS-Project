let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.sidebar');

menu.onclick = () =>{
    menu.classList.toggle('btns');
    navbar.classList.toggle('active');

};

window.onscroll = () =>{
    menu.classList.remove('btns');
    navbar.classList.remove('active');
};


  function showSidebar(){
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display="flex";
};
function hideSidebar(){
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display="none";
};