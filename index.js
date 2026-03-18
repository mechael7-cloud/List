const tombol = document.getElementById("add");
const isiList = document.getElementById("list");
const isiInput = document.getElementById("input");
const inputAda = document.getElementsByClassName("ada");
const inputInbox = document.getElementsByClassName("inbox");

function addList () {
    if( isiInput.value) {
        let list = document.createElement("li");
        list.className = "li";

        let tbl = document.createElement("input");
        tbl.type = "checkbox";
        tbl.className = "inbox";

        let teks = document.createElement("p");

        let span = document.createElement("button");
        span.className = "ada";
        span.innerHTML = "x";

        teks.innerHTML = isiInput.value;

        isiList.appendChild( list);

        list.appendChild(teks);
        list.appendChild(tbl);
        list.appendChild(span);
        
        
        isiInput.value = "";
    } else {
        alert("WAJIB DI ISI")
    }
}
isiList.addEventListener("click", (e) => {
    if(e.target.classList.contains("ada") && e.target.tagName === "BUTTON") {
        let lis = e.target.closest("li");
        if (lis) {
            lis.remove();
        }
    } else if (e.target.closest("li") || e.target.tagName === "LI" ) {
        let li = e.target.closest("li");
        if (li) {
            li.classList.toggle("checked");
        }
    }
})
