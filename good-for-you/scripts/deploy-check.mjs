import { existsSync } from "node:fs";
import { execFileSync } from "node:child_process";

function run(command, args) {
  return execFileSync(command, args, { encoding: "utf8" }).trim();
}

function check(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const branch = run("git", ["branch", "--show-current"]);
const status = run("git", ["status", "--short"]);
const remotes = run("git", ["remote", "-v"]);

check(branch === "main" || branch === "master", `GitHub Pages workflow listens to main/master, current branch is ${branch}.`);
check(!status, "Working tree is not clean. Commit or stash changes before deploying.");
check(remotes.includes("origin"), "Missing git remote 'origin'. Add one with: git remote add origin https://github.com/lirichar/<repo>.git");
check(existsSync(".github/workflows/pages.yml"), "Missing GitHub Pages workflow.");
check(existsSync(".nojekyll"), "Missing .nojekyll.");
check(existsSync("src/app.js"), "Missing module entry src/app.js.");
check(existsSync("data/packs.js"), "Missing content pack registry data/packs.js.");

console.log(JSON.stringify({
  ok: true,
  branch,
  origin: remotes.split("\n").find(line => line.startsWith("origin")) || "",
  next: "Push with: git push -u origin " + branch
}, null, 2));
