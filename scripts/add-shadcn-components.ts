import { execSync } from "node:child_process";

const runCommand = (description: string, command: string) => {
  console.log(`\n${description}...`);
  try {
    execSync(command, {
      stdio: "inherit",
      cwd: process.cwd(),
    });
    console.log(`✓ ${description} completed!`);
  } catch (error) {
    console.error(`\n✗ ${description} failed:`, error);
    process.exit(1);
  }
};

try {
  runCommand(
    "📦 Adding all shadcn components",
    "pnpx shadcn@latest add --all --yes --overwrite"
  );
  runCommand("🔄 Migrating to Radix", "pnpx shadcn@latest migrate radix --yes");
  runCommand("🔧 Running pnpm fix", "pnpm fix");

  console.log("\n✅ All steps completed successfully!");
} catch (error) {
  console.error("\n✗ Setup failed:", error);
  process.exit(1);
}
