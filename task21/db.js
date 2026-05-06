let logs = [];
async function runPipeline() {
    logs = [];
    logs.push("🔄 Code Checkout...");
    await delay();
    logs.push("⚙️ Build Started...");
    await delay();
    logs.push("🧪 Running Tests...");
    await delay();
    logs.push("✅ Tests Passed");
    await delay();
    logs.push("🚀 Deploying Application...");
    await delay();
    logs.push("🎉 Deployment Successful!");
}
function getLogs() {
    return logs;
}
function delay() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}
module.exports = { runPipeline, getLogs };