import SidebarNav from "@/components/SidebarNav";
import CompanionPanel from "./components/CompanionPanel";
import PipelineOverview from "./components/PipelineOverview";
import QuickAccessPanel from "./components/QuickAccessPanel";
import NotesAndPrompts from "./components/NotesAndPrompts";

export default function Workspace() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <SidebarNav />
      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold text-gold mb-4">Welcome to Your Dashboard</h1>
        <p className="text-gray-400 mb-8">
          This is your AI-powered control center. Let’s get cookin’.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <CompanionPanel />
          <PipelineOverview />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <QuickAccessPanel />
          <NotesAndPrompts />
        </div>
      </main>
    </div>
  );
}
