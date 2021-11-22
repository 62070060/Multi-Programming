
function NuTz(){
    newY = window.scrollY;
    document.body.style.setProperty('--h',newY*0.3);
  
    theY.innerText = newY;
    nongwow = wow.offsetTop;
    if(newY+window.innerHeight-(wow.offsetHeight/3) >= nongwow && newY < nongwow+950){
      wow.style.transform = 'translate(1%)';
    }else{
      wow.style.transform = 'translate(150%)';
    }
  };