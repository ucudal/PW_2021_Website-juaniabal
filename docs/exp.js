var experiences = [];
window.onload = function () {
    var url = "https://PW2021-APINode-juaniabal-1.juaniabal.repl.co/experiencia-laboral";
    fetch(url, {
    method: "GET",
    headers: { 'Content-Type': 'application/json' }
    }).then(function (response) {
        console.log(response.text().then(function(responseText){
            let exp = JSON.parse(responseText)["experiencia-laboral"];
            experiencies = exp;
        }));
    });
};