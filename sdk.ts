// Note: the "@anthropic-ai/claude-code" package has been renamed
// to "@anthropic-ai/claude-agent-sdk"
import { query } from "@anthropic-ai/claude-agent-sdk";

const prompt = "Add a description to package.json.";

for await (const message of query({
  prompt,
  options: {
    allowedTools: ["Edit"], // Allow the agent to use the file system tool
  }
})) {
  console.log(JSON.stringify(message, null, 2));
}
