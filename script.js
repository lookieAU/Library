const myLibrary = [];

function Book(){

}

function addBookTOLibrary(){
    
}
const table = document.querySelector("tbody");
const btn = document.querySelector(".btn");
function createForm(){
    const formParent = document.querySelector(".form");
    const form = document.createElement("form");
    const labelname = document.createElement("label");
    const labelauthor = document.createElement("label");
    const labelread = document.createElement("label");
    const inputname = document.createElement("input");
    const inputauthor = document.createElement("input");
    const inputread = document.createElement("input");
    labelname.setAttribute("for","mname");
    labelname.innerHTML = "Book Name: ";
    inputname.classList.add("inputname");
    inputname.setAttribute("type","text");
    inputname.setAttribute("name","mname");
    inputname.setAttribute("id","mname");
    labelauthor.setAttribute("for","mname");
    labelauthor.innerHTML = "Book Author: "
    inputauthor.setAttribute("type","text");
    inputauthor.setAttribute("name","mname");
    inputauthor.setAttribute("id","mname");
    labelread.setAttribute("for","mname");
    labelread.innerHTML = "Read/Not read: "
    inputread.setAttribute("type","checkbox");
    inputread.setAttribute("name","mname");
    inputread.setAttribute("id","mname");
    inputread.setAttribute("value","readstatus");
    form.appendChild(labelname);
    const br1 = document.createElement('br');
    form.appendChild(br1);
    form.appendChild(inputname);
    const br2 = document.createElement('br');
    form.appendChild(br2);
    form.appendChild(labelauthor);
    const br3 = document.createElement('br');
    form.appendChild(br3);
    form.appendChild(inputauthor);
    const br4 = document.createElement('br');
    form.appendChild(br4);
    form.appendChild(labelread);
    const br5 =document.createElement('br');
    form.appendChild(br5);
    form.appendChild(inputread);
    const submit = document.createElement("input");
    submit.setAttribute("type","submit");
    submit.setAttribute("value","Submit");
    // submit.innerText = "Submit";
    submit.classList.add("submitAdd");
    form.appendChild(submit);
    formParent.appendChild(form);
    formParent.setAttribute("style","padding-bottom: 30px;");
    submit.addEventListener("click",function(){
        const row = document.createElement('tr');
        const content = document.createElement('td');
        const content1 = document.createElement('td');
        content.innerHTML = "Hey!"
        content1.innerHTML = "Hey!"
        for(i=0;i<=2;i++){
            row.appendChild(content);
        }
        // row.appendChild(content);
        // row.appendChild(content1);
        // row.appendChild(content);
        table.appendChild(row);
        console.log("Hey");
    });

}

btn.addEventListener("click",createForm);
