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
function showContacts(){
    
    var names = "names: "
    contacts.forEach(element => {
        names += element.name  +", "
    });
    window.confirm(names);
}

function contact(){
    var name = document.getElementById("name").value;
    var organization = document.getElementById("organization").value;
    var comments = document.getElementById("comments").value;

    const contact = new Contact(name,organization,comments);
    contacts.push(contact);
}