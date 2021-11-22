function NuTz(){
    newY = window.scrollY;
    document.body.style.setProperty('--h',newY*0.3);
  
    theY.innerText = newY;

    nongpic = gallery.offsetTop;
    if(newY+window.innerHeight > nongpic+600){
      picture.dataset.active = 1;
      picture.style.setProperty('--i',(newY-nongpic)/10);
    }else{
      picture.dataset.active = 0;
    }
  };