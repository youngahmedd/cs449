import PageLayout from '../../../components/PageLayout';

export default function Evaluation() {
  return (
    <PageLayout title="Evaluation">
      <section className="content-section">
        <div className="section-title">
          <h2>Heuristic Evaluation</h2>
        </div>
        <div className="grid gap-6">
          {[
            {
              principle: "Visibility of System Status",
              score: "4.5/5",
              strengths: ["Clear progress indicators", "Real-time feedback", "Status messages"],
              improvements: ["Enhanced loading states"]
            },
            {
              principle: "User Control and Freedom",
              score: "4.8/5",
              strengths: ["Undo/redo functionality", "Cancel operations", "Clear exit points"],
              improvements: ["Add bulk actions"]
            },
            {
              principle: "Consistency and Standards",
              score: "4.6/5",
              strengths: ["Consistent UI patterns", "Standard shortcuts", "Familiar terminology"],
              improvements: ["Standardize icons"]
            }
          ].map((item, index) => (
            <div key={index} className="highlight-box">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-cambridge-blue">{item.principle}</h3>
                <span className="text-tea-green font-semibold">{item.score}</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Strengths</h4>
                  <ul className="space-y-2">
                    {item.strengths.map((strength, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Improvements</h4>
                  <ul className="space-y-2">
                    {item.improvements.map((improvement, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-light-pink" />
                        <span>{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Cognitive Walkthrough</h2>
        </div>
        <div className="content-grid">
          <div className="highlight-box">
            <h3>Task Analysis</h3>
            <div className="space-y-4 mt-4">
              {[
                { task: "Create New Project", success: "98%", notes: "Clear entry point and setup flow" },
                { task: "Add Animation", success: "95%", notes: "Intuitive timeline controls" },
                { task: "Export Animation", success: "97%", notes: "Streamlined export process" }
              ].map((task, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-medium">{task.task}</span>
                  <span className="text-cambridge-blue">{task.success}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="highlight-box">
            <h3>User Journey Steps</h3>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>Project Initialization</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tea-green" />
                <span>Asset Management</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-light-pink" />
                <span>Animation Creation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Design Improvements</h2>
        </div>
        <div className="grid gap-6">
          {[
            { area: "Navigation", impact: "Reduced clicks by 40%", status: "Implemented" },
            { area: "Performance", impact: "50% faster rendering", status: "In Progress" },
            { area: "Accessibility", impact: "WCAG 2.1 AA Compliant", status: "Implemented" }
          ].map((improvement, index) => (
            <div key={index} className="highlight-box">
              <h3 className="text-cambridge-blue mb-2">{improvement.area}</h3>
              <p className="mb-2">{improvement.impact}</p>
              <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                improvement.status === 'Implemented' 
                  ? 'bg-cambridge-blue/20 text-cambridge-blue' 
                  : 'bg-light-pink/20 text-light-pink'
              }`}>
                {improvement.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
