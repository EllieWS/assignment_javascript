function add() {
    var input=document.querySelector('[data-input');
    var value=input.value;
    var ul=document.querySelector('[data-list');
    var li=document.createElement("li");
    li.textContent=value;
    li.style.margin="10px";
    ul.appendChild(li);
    document.querySelector('[data-input').value="";
}