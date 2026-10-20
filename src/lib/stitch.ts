/**
 * Stitch MCP Client
 *
 * A lightweight server-side utility for calling the Google Stitch MCP API.
 * The API key is read from STITCH_API_KEY in your environment (.env.local).
 *
 * Usage (inside a Next.js API Route or Server Action):
 *   import { callStitch } from "@/lib/stitch";
 *   const data = await callStitch("/some/endpoint", { method: "GET" });
 */

const STITCH_BASE_URL = "https://stitch.googleapis.com/mcp";

/**
 * Make an authenticated request to the Stitch MCP server.
 *
 * @param path   - Endpoint path (e.g. "/v1/projects")
 * @param init   - Standard `RequestInit` options (method, body, headers, …)
 * @returns      - Parsed JSON response
 */
export async function callStitch<T = unknown>(
  path: string,
  init?: RequestInit
): Promise<T> {
  const apiKey = process.env.STITCH_API_KEY;
  if (!apiKey) {
    throw new Error(
      "[stitch] STITCH_API_KEY is not set. Add it to your .env.local file."
    );
  }

  const url = `${STITCH_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  const response = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      ...(init?.headers ?? {}),
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `[stitch] Request to ${url} failed with ${response.status}: ${text}`
    );
  }

  return response.json() as Promise<T>;
}
