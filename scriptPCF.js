function NuTz(){
    newY = window.scrollY;
    document.body.style.setProperty('--h',newY*0.3);
    gear.style.setProperty('--deg',newY);
    gear2.style.setProperty('--deg',newY);
    theY.innerText = newY;

    nongwow = wow.offsetTop;
    if(newY+window.innerHeight-(wow.offsetHeight/3) >= nongwow && newY < nongwow+700){
      wow.style.transform = 'translate(-20%)';
    }else{
      wow.style.transform = 'translate(100%)';
    }
  };