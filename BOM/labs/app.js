function setPlusIcon() {
    let alLis = document.getElementsByTagName('li');
    
    for (var i = 0; i < alLis.length; i++) {
        let li = alLis[i];
        let alULs = li.getElementsByTagName('ul');
        console.log(alULs);
        if(alULs > 0){
            
                console.log('hello');
            if(alULs[0].className == 'expandable'){
                li.style.listStyleImage = "url('img/9-512.png')";
            }
        }

    }
}

setPlusIcon();
