document.getElementById("submitButton").addEventListener("click", function() {
    const radio = document.querySelector('input[name="rate"]:checked').value;

    const newNode = document.createElement("p");
    newNode.className = "card-selection";
    const textNode = document.createTextNode(`You selected ${radio} out of 5`);
    newNode.appendChild(textNode);

    const card = document.getElementById("thankYouCard");
    card.insertBefore(newNode, card.children[1]);
    
    document.getElementById("originalCard").className = "main-card hidden";
    document.getElementById("thankYouCard").className = "main-card";
});