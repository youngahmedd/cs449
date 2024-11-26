import PageLayout from '../../../components/PageLayout';

export default function Interviews() {
  return (
    <PageLayout title="User Interviews">
      <section className="content-section">
        <div className="section-title">
          <h2>Interview Methodology</h2>
        </div>
        <div className="content-grid">
          <div className="highlight-box">
            <h3>Research Approach</h3>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>Semi-structured interviews</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tea-green" />
                <span>Contextual inquiry</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-light-pink" />
                <span>Task analysis</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p>Our research focused on understanding user workflows, pain points, and desired features through in-depth conversations.</p>
            <p>We conducted interviews with various stakeholders to gather diverse perspectives on motion design challenges.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Participant Demographics</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { category: "Experience Level", stats: ["Junior: 30%", "Mid-level: 45%", "Senior: 25%"] },
            { category: "Industry", stats: ["Design Agencies: 40%", "In-house: 35%", "Freelance: 25%"] },
            { category: "Role", stats: ["Motion Designers: 50%", "UI/UX: 30%", "Art Directors: 20%"] }
          ].map((demo, index) => (
            <div key={index} className="highlight-box">
              <h3 className="text-cambridge-blue mb-4">{demo.category}</h3>
              <ul className="space-y-2">
                {demo.stats.map((stat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-tea-green" />
                    <span>{stat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Key Findings</h2>
        </div>
        <div className="grid gap-6">
          {[
            { finding: "Workflow Optimization", description: "Users spend 40% of their time on repetitive tasks" },
            { finding: "Collaboration Challenges", description: "Limited tools for real-time feedback and iteration" },
            { finding: "Learning Curve", description: "Steep learning curve prevents adoption of advanced features" }
          ].map((finding, index) => (
            <div key={index} className="highlight-box">
              <h3 className="text-cambridge-blue mb-2">{finding.finding}</h3>
              <p>{finding.description}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
