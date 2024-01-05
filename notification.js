let toastbar=document.getElementById("toastbar");
let successmsg=" ✅ succesfully submitted";
let errormsg=" ❌there was an error in submition"
let invalid="❗ inalid Input,check again"
function show(msg)
{
    let toast=document.createElement('div')
    toast.classList.add("toast");
    toast.innerText=msg;
    toastbar.appendChild(toast)
}
