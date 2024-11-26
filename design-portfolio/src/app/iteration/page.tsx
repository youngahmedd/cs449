import PageLayout from '../../../components/PageLayout';

export default function Iteration() {
  return (
    <PageLayout title="Design Iteration">
      <section className="content-section">
        <div className="section-title">
          <h2>Design Changes</h2>
        </div>
        <div className="content-grid">
          <div className="highlight-box">
            <h3>Major Updates</h3>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>Simplified Timeline Interface</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tea-green" />
                <span>Enhanced Property Controls</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-light-pink" />
                <span>Improved Preview Performance</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p>Based on user feedback and testing results, we implemented several key improvements to enhance usability.</p>
            <p>Each iteration focused on simplifying workflows while maintaining powerful functionality.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Iteration Process</h2>
        </div>
        <div className="grid gap-6">
          {[
            {
              phase: "Initial Feedback",
              changes: ["Streamlined navigation", "Clearer visual hierarchy", "Improved tooltips"],
              impact: "30% reduction in onboarding time"
            },
            {
              phase: "Beta Testing",
              changes: ["Optimized performance", "Added keyboard shortcuts", "Enhanced export options"],
              impact: "25% increase in task completion rate"
            },
            {
              phase: "Final Refinements",
              changes: ["Polish animations", "Fine-tune interactions", "Accessibility improvements"],
              impact: "95% user satisfaction score"
            }
          ].map((phase, index) => (
            <div key={index} className="highlight-box">
              <h3 className="text-cambridge-blue mb-2">{phase.phase}</h3>
              <ul className="space-y-2 mb-4">
                {phase.changes.map((change, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-tea-green" />
                    <span>{change}</span>
                  </li>
                ))}
              </ul>
              <p className="text-light-pink font-medium">Impact: {phase.impact}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Final Design</h2>
        </div>
        <div className="content-grid">
          <div className="highlight-box">
            <h3>Key Improvements</h3>
            <div className="space-y-4 mt-4">
              {[
                { metric: "Task Completion Time", before: "8 min", after: "3 min" },
                { metric: "Error Rate", before: "15%", after: "3%" },
                { metric: "User Satisfaction", before: "3.2/5", after: "4.8/5" }
              ].map((metric, index) => (
                <div key={index} className="grid grid-cols-3 gap-4">
                  <span>{metric.metric}</span>
                  <span className="text-light-pink">Before: {metric.before}</span>
                  <span className="text-cambridge-blue">After: {metric.after}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="highlight-box">
            <h3>User Feedback</h3>
            <div className="space-y-3 mt-4">
              <p>"Much more intuitive and efficient workflow"</p>
              <p>"Significant improvement in performance"</p>
              <p>"Love the new keyboard shortcuts"</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
