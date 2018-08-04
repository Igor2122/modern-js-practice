


/*   
    
    Window parameters
        history: length, back(), forward(), go(3) pass number if 3 forward 3 pages -3 back 3 pages
        navigator: 
            function f () {
                let s = '';
                for(var in navigator) {
                    console.log(s ':', navigator[s]);
                }
            }
        screen: width, height, availwidth, availheight;
        location: ex: http://www.site.com:81/about/index.html?x=10#metka
            location: properties: 
                protocol: => 'http:'
                hostname: => 'www.site.com'
                port: => if 80 empty if other => '81'
                host: => www.site.com:81  - host name and port together 
                pathname: => /about/index.html utill the ? | # all will be included
                search: => '?x=10' including ? will have to cut those out 
                hash: => '#metka' including #
                href: => ''
            ex. location.reload() - simply will reload the page 
                location.reload(true) -  request reload from the server without cache like ctrl f5
                assign/replace: location.assign('www....') replace replaces the current page with newly assined. assign will siply add the previous page to the history log 
                document - is mostyly used 
            


*/


const button = document.getElementById('button');

button.addEventListener('click', doSomething);

function doSomething(e) {
    e.preventDefault();



}



function f() {
    let s = '';
    for (let i in screen) {
        console.log(s, ':', screen[i]);
    }
}

f();