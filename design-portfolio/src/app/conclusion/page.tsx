import PageLayout from '../../../components/PageLayout';

export default function Conclusion() {
  return (
    <PageLayout title="Conclusion">
      <section className="content-section">
        <div className="section-title">
          <h2>Project Reflection</h2>
        </div>
        <div className="content-grid">
          <div className="highlight-box">
            <h3>Key Achievements</h3>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>Improved User Efficiency by 60%</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tea-green" />
                <span>95% User Satisfaction Rate</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-light-pink" />
                <span>Reduced Learning Curve by 40%</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p>Our journey in creating Motion has been transformative, leading to significant improvements in motion design workflows.</p>
            <p>Through iterative design and continuous user feedback, we've created a tool that truly serves its users' needs.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Future Improvements</h2>
        </div>
        <div className="grid gap-6">
          {[
            {
              phase: "Short Term",
              improvements: [
                "Advanced collaboration features",
                "Enhanced export options",
                "Additional animation presets"
              ]
            },
            {
              phase: "Medium Term",
              improvements: [
                "Real-time co-editing",
                "Plugin ecosystem",
                "Advanced motion tracking"
              ]
            },
            {
              phase: "Long Term",
              improvements: [
                "AI-assisted animations",
                "3D animation support",
                "Cross-platform integration"
              ]
            }
          ].map((phase, index) => (
            <div key={index} className="highlight-box">
              <h3 className="text-cambridge-blue mb-4">{phase.phase}</h3>
              <ul className="space-y-2">
                {phase.improvements.map((improvement, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-tea-green" />
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Lessons Learned</h2>
        </div>
        <div className="content-grid">
          <div className="highlight-box">
            <h3>Design Process</h3>
            <div className="space-y-3 mt-4">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>Early user involvement is crucial</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tea-green" />
                <span>Iterative testing leads to better results</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-light-pink" />
                <span>Simplicity drives adoption</span>
              </span>
            </div>
          </div>
          <div className="highlight-box">
            <h3>Technical Insights</h3>
            <div className="space-y-3 mt-4">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>Performance optimization is key</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tea-green" />
                <span>Modular architecture enables scaling</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-light-pink" />
                <span>Accessibility cannot be an afterthought</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
