let toggleNavStatus = false;
let toggleNav = function(){
    let getbtn = document.querySelector('.btn-toggle img')
    let getbtndiv = document.querySelector('.btn-toggle')
    let  getSidebar = document.querySelector('.sidebar')
    let  getSidebarUl = document.querySelector('.sidebar ul')
    
    if(!toggleNavStatus)
    {
        getbtn.style.margin = "0 10px"
        getbtndiv.style.width = "250px"
        getbtndiv.style.justifyContent = "flex-start"
        getSidebar.style.width = "250px"
        getSidebarUl.style.display = 'block'
        getSidebarUl.style.opacity = 1
        toggleNavStatus = true;
    }
    else{
        getSidebarUl.style.opacity = 0
        getbtn.style.margin = "0"
        getbtndiv.style.justifyContent = "center"
        getbtndiv.style.width = "62px"
        getSidebar.style.width = "62px"
        getSidebarUl.style.display = 'none'
        toggleNavStatus = false;
    }
}