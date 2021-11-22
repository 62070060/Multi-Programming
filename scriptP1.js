
function NuTz(){
    newY = window.scrollY;
    document.body.style.setProperty('--h',newY*0.3);
  
    theY.innerText = newY;
    nongwow = wow.offsetTop;
    if(newY+window.innerHeight-(wow.offsetHeight/3) >= nongwow && newY < nongwow+950){
      wow.style.transform = 'translate(2%)';
    }else{
      wow.style.transform = 'translate(150%)';
    }

    nongwow = wow2.offsetTop;
    if(newY+window.innerHeight-(wow2.offsetHeight/3) >= nongwow && newY < nongwow+4100){
        wow2.style.transform = 'translate(2%)';
      }
    else{
      wow2.style.transform = 'translate(300%)';
    }
  };