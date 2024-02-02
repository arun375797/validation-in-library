


let useName = prompt("Enter Your Name:");
let names = document.querySelector(".wel-name");
names.innerHTML = useName;  
names.innerHTML = `<span style="color: green; font-family: Arial, sans-serif;">${useName.toUpperCase()}</span>`
