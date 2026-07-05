import { defineMcp } from "@lovable.dev/mcp-js";
import echoTool from "./tools/echo";

export default defineMcp({
  name: "soatomic-mcp",
  title: "Soatomic MCP",
  version: "0.1.0",
  instructions:
    "Agent integrations for the Soatomic app. Use `echo` to verify connectivity.",
  tools: [echoTool],
});