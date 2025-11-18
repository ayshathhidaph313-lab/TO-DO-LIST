let input = document.getElementById("input");
let list = document.getElementById("list");

function AddText() {
        if (input.value === "") {
                alert("type any message");
                return;
        }


        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        input.value = "";
        span.onclick = function () {
                li.remove();
        }

}

