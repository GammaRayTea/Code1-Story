var text= "a"

var length = text.length;
var timeOut;
var character = 0;
var document =

(function typeWriter() { 
    let content = document.querySelector("p1");
    content.innerText= "hello there"
    timeOut = setTimeout(function() {
        character++;
        var type = text.substring(0, character);
        let content = document.querySelector("p1");
        /*header.innerText= text(type)*/
        content.innerText= "hello there"
        typeWriter();

        if (character == length) {
            clearTimeout(timeOut);
        }
        
    }, 150);
}());
print("aaa")
typeWriter()