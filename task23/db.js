function processPrompt(prompt) {
    let output = "";
    let score = 5;
    if (prompt.toLowerCase().includes("code")) {
        output = `function greet() {
    console.log("Hello from AI!");
}`;
        score = 9;
    } 
    else if (prompt.toLowerCase().includes("cloud")) {
        output = `AWS EC2 Config:
- Instance: t2.micro
- Region: us-east-1`;
        score = 8;
    } 
    else {
        output = "Basic AI response generated.";
        score = 5;
    }

    return { output, score };
}
module.exports = { processPrompt };