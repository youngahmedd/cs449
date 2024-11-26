import PageLayout from '../../../components/PageLayout';

export default function Prototypes() {
  return (
    <PageLayout title="Prototypes">
      <section className="content-section">
        <div className="section-title">
          <h2>Paper Prototype Testing</h2>
        </div>
        <div className="content-grid">
          <div className="highlight-box">
            <h3>Testing Process</h3>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>5 User Testing Sessions</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tea-green" />
                <span>Task Completion Analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-light-pink" />
                <span>Think-aloud Protocol</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p>Initial paper prototypes helped us validate core navigation concepts and feature placement.</p>
            <p>User feedback at this stage significantly influenced our information architecture decisions.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>High-Fidelity Prototype</h2>
        </div>
        <div className="grid gap-6">
          {[
            { feature: "Timeline Editor", description: "Interactive timeline with keyframe manipulation" },
            { feature: "Property Controls", description: "Intuitive controls for animation properties" },
            { feature: "Preview Window", description: "Real-time animation preview with playback controls" }
          ].map((feature, index) => (
            <div key={index} className="highlight-box">
              <h3 className="text-cambridge-blue mb-2">{feature.feature}</h3>
              <p>{feature.description}</p>
              <div className="mt-4 p-4 bg-cream/50 rounded-lg">
                {/* Placeholder for prototype screenshots */}
                <div className="h-40 bg-gradient-to-r from-cambridge-blue/20 to-tea-green/20 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">Prototype Screenshot</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>User Testing Results</h2>
        </div>
        <div className="content-grid">
          <div className="highlight-box">
            <h3>Key Metrics</h3>
            <div className="space-y-4 mt-4">
              {[
                { metric: "Task Success Rate", value: "85%" },
                { metric: "Time on Task", value: "Reduced by 40%" },
                { metric: "User Satisfaction", value: "4.2/5" }
              ].map((metric, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{metric.metric}</span>
                  <span className="text-cambridge-blue font-semibold">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="highlight-box">
            <h3>User Feedback</h3>
            <div className="space-y-3 mt-4">
              {[
                "Intuitive timeline controls",
                "Clear property organization",
                "Responsive preview window"
              ].map((feedback, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-tea-green" />
                  <span>{feedback}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
