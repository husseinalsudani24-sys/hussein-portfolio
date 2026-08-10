import { existsSync } from "node:fs";
import { join } from "node:path";

/** Checks whether a file exists under public/, so templates can fall back gracefully instead of shipping a 404. */
export function publicAssetExists(relativePath: string): boolean {
  return existsSync(join(process.cwd(), "public", relativePath.replace(/^\//, "")));
}
