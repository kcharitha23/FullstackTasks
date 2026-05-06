let history = [];
function process(prompt) {
    let output = "";
    let score = 5;
    history.push({ prompt });
    if (prompt.includes("REST")) {
        output = `app.get('/api', (req,res)=>res.send('API running'));`;
        score = 7;
    } 
    else if (prompt.includes("cloud")) {
        output = `Deploy using AWS EC2:
1. Launch instance
2. Install Node.js
3. Run app`;
        score = 8;
    } 
    else if (prompt.includes("security")) {
        output = `Use HTTPS, JWT authentication, and firewall rules`;
        score = 9;
    }
    score += Math.min(history.length, 2);
    return { output, score };
}
function getHistory() {
    return history;
}
module.exports = { process, getHistory };