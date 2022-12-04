let i = document.querySelector(".fa-solid");
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop >150) {
    i.style.display = "block";
  }else{
    i.style.display = "none";
  }
});
i.addEventListener("click",function(){
    document.documentElement.scrollTop = 0;
})