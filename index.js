console.log("Console OS initialized successfully")

console.log("Console OS")
setTimeout((1), console.log("by 0x10variacie"));
console.log("Waiting...");
let prompt = document.getElementById("TypePrompt");
prompt = String(prompt);

document.getElementById("BSubmit").onclick = function() {
    console.log(prompt);
    if (prompt="about") {
        console.log("Please expand");
        console.log("ConsoleOS v.DEV");
        console.log("made by 0x10variacie");
    }
    else if (prompt="help") {
        console.log("Please expand");
        console.log("help - displays this page")
        console.log("about - displays information about this console")
    }
    
}
