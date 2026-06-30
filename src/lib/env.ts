/**
 * Validates required environment variables at runtime.
 * Called from server-only entry points (auth, API routes, prisma).
 */

const requiredServerVars = [
  "DATABASE_URL",
  "NEXTAUTH_SECRET",
  "ADMIN_PASSWORD",
] as const;

let validated = false;

export function validateEnv(): void {
  if (validated) return;

  const missing = requiredServerVars.filter((key) => !process.env[key]?.trim());

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}. See .env.example.`
    );
  }

  if ((process.env.ADMIN_PASSWORD?.length ?? 0) < 12) {
    throw new Error(
      "ADMIN_PASSWORD must be at least 12 characters. See .env.example."
    );
  }

  validated = true;
}
