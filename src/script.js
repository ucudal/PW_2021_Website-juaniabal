var form = document.getElementById("formulario");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

class Contact{
    constructor (name,organization,comments){
        this.name = name;
        this.organization = organization;
        this.comments = comments;
    }
}
var contacts = [];

document.getElementById("contact").addEventListener("click", function(event){
    event.preventDefault()
  
    var name = document.getElementById("nam").value;
    var organization = document.getElementById("org").value;
    var comments = document.getElementById("commen").value;
    const contact = new Contact(name,organization,comments);
    contacts.push(contact); 

    var body = {
        nombreContacto: name
    };
    var url = "https://PW2021-APINode-juaniabal-1.juaniabal.repl.co/enviar-formulario";
    fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    }).then(function (response) {
        response.text().then(function (text) { alert(text); });   
    });

});
