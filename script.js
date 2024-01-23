function sendMessage () {
    let userinput = document.getElementById("userInput").value;
    let userinputsplit = userinput.split (" ")
    if(userinputsplit.includes("opendag")) {
        response = "De opendag is op 26/27 Januari."
    }
    if(userinputsplit.includes("programmeertalen")) {
        response = "Programmeertalen zoals HTML, CSS, Javascript, PHP etc."
    }
    document.getElementById("chatBox").innerText = response
}