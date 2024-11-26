import PageLayout from '../../../components/PageLayout';

export default function ValueProposition() {
  return (
    <PageLayout title="Value Proposition">
      <section className="content-section">
        <div className="section-title">
          <h2>Market Segment</h2>
        </div>
        <div className="content-grid">
          <div className="highlight-box">
            <h3>Target Market</h3>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>Design Professionals</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tea-green" />
                <span>Creative Agencies</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-light-pink" />
                <span>Digital Product Teams</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p>Our solution targets professionals who need efficient and intuitive motion design tools.</p>
            <p>We focus on streamlining the animation workflow while maintaining high-quality output.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Project Goals</h2>
        </div>
        <div className="grid gap-6">
          {[
            { title: "Efficiency", description: "Streamline the motion design workflow" },
            { title: "Accessibility", description: "Make motion design more approachable" },
            { title: "Integration", description: "Seamless workflow with existing tools" }
          ].map((goal, index) => (
            <div key={index} className="highlight-box">
              <h3 className="text-cambridge-blue mb-2">{goal.title}</h3>
              <p>{goal.description}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}