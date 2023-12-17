console.log("Console OS initialized successfully")

console.log("Console OS")
setTimeout((1), console.log("by 0x10variacie"));
console.log("Waiting...");

document.getElementById("BSubmit").onclick = function() {
    let prompt = document.getElementById("TypePrompt");
    prompt = String(prompt);
    switch (document.getElementById("TypePrompt".value)) {
        case prompt = "about":
            console.log("Please expand");
            console.log("ConsoleOS v.DEV");
            console.log("made by 0x10variacie");        
            break;
        case prompt = "help":
            console.log("Please expand");
            console.log("help - displays this page");
            console.log("about - displays information about this console");      
            break;
        case prompt = "calc":
            console.log("Please expand");
            console.log("Send me the 1st value");
            console.log("Under development");
            break;

        default:
            break;
    }
}