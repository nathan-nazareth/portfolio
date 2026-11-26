import { describe, expect, it } from "vitest";

// Tests reach the package only through its entry point.
import { projectTitle } from "../index.ts";

describe("projectTitle", () => {
  it("title-cases a project name", () => {
    expect(projectTitle("lord of the rinse")).toBe("Lord Of The Rinse");
  });

  it("collapses surrounding whitespace", () => {
    expect(projectTitle("  westmarch  ")).toBe("Westmarch");
  });
});
