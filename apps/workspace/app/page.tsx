import { WorkspaceShell } from "@/components/workspace-shell";
import { loadWorkspaceSnapshot } from "@/lib/workspace-data";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const snapshot = loadWorkspaceSnapshot();
  return <WorkspaceShell snapshot={snapshot} />;
}
