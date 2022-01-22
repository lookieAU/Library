const myLibrary = [];
const formParent = document.querySelector(".form");
const form = document.createElement("form");
const labelname = document.createElement("label");
const labelauthor = document.createElement("label");
const labelread = document.createElement("label");
const labelpage = document.createElement("label");
const inputname = document.createElement("input");
const inputauthor = document.createElement("input");
const inputread = document.createElement("input");
const inputpage = document.createElement("input");
const submit = document.createElement("button");
alert("console.log \'myLibrary\' to get all the items of the Library below!");
function Book(){
    // bookName = createForm();
    bookName = inputname.value;
    myLibrary.push(bookName);
}

function addBookToLibrary(){
    // already made with basic script so not used here
}
const table = document.querySelector("tbody");
const btn = document.querySelector(".btn");
function createForm(){

    labelname.setAttribute("for","mname");
    labelname.innerHTML = "Book Name: ";
    inputname.classList.add("inputform");
    inputname.setAttribute("type","text");
    inputname.setAttribute("name","mname");
    inputname.setAttribute("id","mname");
    labelauthor.setAttribute("for","mname");
    labelauthor.innerHTML = "Book Author: "
    inputauthor.setAttribute("type","text");
    inputauthor.setAttribute("name","mname");
    inputauthor.setAttribute("id","mname");
    inputauthor.classList.add("inputform");
    labelpage.setAttribute("for","page");
    labelpage.innerHTML = "Total number of pages: ";
    inputpage.classList.add("inputform");
    inputpage.setAttribute("type","number");
    inputpage.setAttribute("name","page");
    inputpage.setAttribute("id","page");
    labelread.setAttribute("for","mname");
    labelread.innerHTML = "Read/Not read: "
    inputread.setAttribute("type","checkbox");
    inputread.setAttribute("name","mname");
    inputread.setAttribute("id","mname");
    inputread.setAttribute("value","readstatus");
    inputread.classList.add("inputread");
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
    const br = document.createElement('br');
    form.appendChild(br);
    form.appendChild(labelpage);
    const br0 = document.createElement("br");
    form.appendChild(br0);
    form.appendChild(inputpage);
    const br4 = document.createElement('br');
    form.appendChild(br4);
    form.appendChild(labelread);
    
    form.appendChild(inputread);
    const br5 =document.createElement('br');
    form.appendChild(br5);
    const br6 =document.createElement('br');
    form.appendChild(br6);
    
    submit.setAttribute("type","button");
    // submit.setAttribute("value","Submit");
    submit.innerText = "Submit";
    submit.classList.add("submitAdd");
    form.appendChild(submit);
    formParent.appendChild(form);
    formParent.setAttribute("style","padding-bottom: 30px;");
    submit.addEventListener("click",function(){
        const row = document.createElement('tr');
        const contentname = document.createElement('td');
        const contentauthor = document.createElement('td');
        const contentpage = document.createElement('td');
        const contentread = document.createElement('td');
        const del = document.createElement('td');
        contentname.innerHTML = inputname.value;
        contentauthor.innerHTML = inputauthor.value;
        contentpage.innerHTML = inputpage.value;
        const state = inputread.checked;
        if(state==true){
            contentread.innerHTML = "Read";
        } 
        else{
            contentread.innerHTML = "Not read";
        }
        const delbutton = document.createElement("button");
        delbutton.classList.add("delbutton");
        delbutton.innerHTML = "Delete"
        delbutton.addEventListener("click",function(){
            delbutton.closest('tr').remove();
        });
        // content1.innerHTML = "Hey!"
        // for(i=0;i<=2;i++){
        //     row.appendChild(content);
        // }
        row.appendChild(contentname);
        row.appendChild(contentauthor);
        row.appendChild(contentpage);
        row.appendChild(contentread);
        del.appendChild(delbutton);
        row.appendChild(del);
        table.appendChild(row);
        Book();
        form.reset();
    });
    // submit.addEventListener("click",Book);
    

}

btn.addEventListener("click",createForm);


