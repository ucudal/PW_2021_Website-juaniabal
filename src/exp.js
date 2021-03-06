var experiences = [];
var url = "https://PW2021-APINode-juaniabal-1.juaniabal.repl.co/experiencia-laboral";
fetch(url, {
    method: "GET",
    headers: { 'Content-Type': 'application/json' }
}).then(function (response) {
    response.text().then(function (responseText) {
        let exp = JSON.parse(responseText)["experiencia-laboral"];
        document.getElementById("year-0").textContent = (exp[0].fechaInicio.toString().split("T")[0]).split("-")[0]
        document.getElementById("month-0").textContent = (exp[0].fechaInicio.toString().split("T")[0]).split("-")[1]
        document.getElementById("name-0").textContent = exp[0].empresa
        document.getElementById("role-0").textContent = exp[0].puesto
        document.getElementById("description-0").textContent = exp[0].descripcion

        document.getElementById("name-1").textContent = exp[1].empresa

        document.getElementById("year-1").textContent = (exp[1].fechaInicio.toString().split("T")[0]).split("-")[0] + " - " + (exp[1].fechaInicio.toString().split("T")[0]).split("-")[0]

        document.getElementById("role-1").textContent = exp[1].puesto
        document.getElementById("description-1").textContent = exp[1].descripcion

        document.getElementById("year-0-sm").textContent = (exp[0].fechaInicio.toString().split("T")[0]).split("-")[0]
        document.getElementById("month-0-sm").textContent = (exp[0].fechaInicio.toString().split("T")[0]).split("-")[1] + " - " + "Pres."
        document.getElementById("name-0-sm").textContent = exp[0].empresa
        document.getElementById("role-0-sm").textContent = exp[0].puesto
        document.getElementById("description-0-sm").textContent = exp[0].descripcion

        document.getElementById("year-1-sm").textContent = (exp[1].fechaInicio.toString().split("T")[0]).split("-")[0] + " - " + (exp[1].fechaInicio.toString().split("T")[0]).split("-")[0]

        document.getElementById("name-1-sm").textContent = exp[1].empresa
        document.getElementById("role-1-sm").textContent = exp[1].puesto

    });
});

