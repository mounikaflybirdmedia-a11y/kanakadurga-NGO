// Error reporting utility (Lovable dependency removed)
// This is kept as a stub to avoid breaking any remaining imports during migration.

export function reportLovableError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  console.error("[Error Boundary]", error, context);
}
