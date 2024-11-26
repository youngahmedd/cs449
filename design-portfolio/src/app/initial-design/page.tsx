import PageLayout from '../../../components/PageLayout';
import Image from 'next/image';

export default function InitialDesign() {
  return (
    <PageLayout title="Initial Design">
      <section className="content-section">
        <div className="section-title">
          <h2>Feature Ideation</h2>
        </div>
        <div className="content-grid">
          <div className="highlight-box">
            <h3>Key Features</h3>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>Responsive Design System</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tea-green" />
                <span>Interactive Prototypes</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-light-pink" />
                <span>User Flow Mapping</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p>Our initial design phase focused on identifying core features that would address user needs while maintaining simplicity and usability.</p>
            <p>Through collaborative sessions and user feedback, we prioritized features that would deliver the most value.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>User Stories</h2>
        </div>
        <div className="grid gap-6">
          {[
            { role: "Designer", goal: "Create consistent design systems", benefit: "Maintain brand cohesion" },
            { role: "Developer", goal: "Implement responsive layouts", benefit: "Ensure cross-device compatibility" },
            { role: "User", goal: "Navigate interface intuitively", benefit: "Complete tasks efficiently" }
          ].map((story, index) => (
            <div key={index} className="highlight-box">
              <p className="font-medium">As a <span className="text-cambridge-blue">{story.role}</span>,</p>
              <p>I want to <span className="text-tea-green">{story.goal}</span>,</p>
              <p>So that I can <span className="text-light-pink">{story.benefit}</span>.</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
