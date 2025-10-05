const buttons = document.querySelectorAll(".button");
console.log(buttons);
const body = document.querySelector("body");
//const body = document.getElementsByTagName("body");


buttons.forEach((button)=> {
    console.log(button);
    button.addEventListener("click", function(e){
        console.log(e);
        console.log(e.target);

        switch (e.target.id) {

            case "grey" : body.style.backgroundColor= e.target.id;
            break;

            case "white" : body.style.backgroundColor= e.target.id;
            break;

            case "blue" : body.style.backgroundColor= e.target.id;
            break;

            case "yellow" : body.style.backgroundColor= e.target.id;
            break;

        }

    })
})



// | Feature            | `.style.backgroundColor`            | `.setAttribute()`                        |
// | ------------------ | ----------------------------------- | ---------------------------------------- |
// | Purpose            | Change inline CSS via JS properties | Set any HTML attribute                   |
// | Affects            | The `style` attribute only          | Any attribute (`id`, `src`, `alt`, etc.) |
// | Safer for styling? | ✅ Yes                               | ⚠️ No (can overwrite all styles)         |
// | Syntax             | Uses JS camelCase property names    | Uses attribute name strings              |
// | Reads values?      | Reads inline styles only            | Reads the raw attribute string           |
