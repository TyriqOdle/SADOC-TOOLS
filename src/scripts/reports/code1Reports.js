const generateBtn = document.getElementById("GenerateOutput");

function generate() {
    const outputArea = document.getElementById("Output");
    const dateTime = document.getElementById("DateTimeUTC").value;
    const name = document.getElementById("Name").value;
    const rank = document.getElementById("Rank").value;
    const witnesses = document.getElementById("Witnesses").value;
    const situation = document.getElementById("Situation").value;
    const conclusion = document.getElementById("Conclusion").value;

    const outputText = `[img]https://i.imgur.com/H1ZlSoH.png[/img]\n[docsubtitle]Code 1 Report Details[/docsubtitle]\n[divbox=white]\n[b]Date and Time ((UTC)) :[/b] ${dateTime}\n[hr]\n[ol][/ol]\n[b]Name:[/b] ${name}\n[hr]\n[ol][/ol]\n[b]Rank:[/b] ${rank}\n[hr]\n[ol][/ol]\n[b]Any witnesses? (Officers, other inmates, visitors)[/b] ${witnesses}\n[hr]\n[ol][/ol]\n[b]Situation:[/b] ${situation}\n[hr]\n[ol][/ol]\n[b]Conclusion:[/b] ${conclusion}\n[ol][/ol]\n[/divbox]\n[img]https://i.imgur.com/EYwU3XA.png[/img]`;

    outputArea.value = outputText;
    outputArea.select();
    document.execCommand("copy");
}

generateBtn.addEventListener("click", generate);
