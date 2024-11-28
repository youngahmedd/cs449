import PageLayout from '../../../components/PageLayout';
import Image from 'next/image';

export default function Interviews() {
  return (
    <PageLayout title="User Interviews">
      <section className="content-section">
        <div className="section-title">
          <h2>Participant Demographics</h2>
        </div>
        <div className="highlight-box p-6">
          <p className="text-gray-500 italic">
            Content pending: Description of interviewees in general terms (number, average age, gender distribution, and other relevant demographic information).
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Research Methods</h2>
        </div>
        <div className="grid gap-8">
          <div className="highlight-box">
            <h3>Interview Process</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Question Development</h4>
                <ul className="space-y-2">
                  {[
                    "Open-ended questions focused on transportation habits",
                    "Probing questions about social connection experiences",
                    "Scenarios exploring safety concerns and preferences",
                    "Questions about local exploration methods"
                  ].map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Interview Format</h4>
                <ul className="space-y-2">
                  {[
                    "Semi-structured interviews allowing natural conversation flow",
                    "Mix of in-person and virtual sessions",
                    "60-minute sessions with follow-up questions",
                    "Recording and note-taking for detailed analysis"
                  ].map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-tea-green" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="highlight-box">
              <h3>Work Model</h3>
              <div className="relative h-[300px] w-full">
                <div className="absolute inset-0 flex items-center justify-center bg-cream/50 rounded-lg border-2 border-dashed border-cambridge-blue/30">
                  <p className="text-gray-500 italic">Work Model Visualization Pending</p>
                </div>
              </div>
            </div>

            <div className="highlight-box">
              <h3>Affinity Diagram</h3>
              <div className="relative h-[300px] w-full">
                <div className="absolute inset-0 flex items-center justify-center bg-cream/50 rounded-lg border-2 border-dashed border-cambridge-blue/30">
                  <p className="text-gray-500 italic">Affinity Diagram Visualization Pending</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Key Findings</h2>
        </div>
        <div className="grid gap-6">
          {[
            {
              theme: "Transportation Choice Factors",
              points: [
                "Convenience and time prioritization",
                "Weather dependency affects choices",
                "Physical effort considerations"
              ]
            },
            {
              theme: "Social Connection",
              points: [
                "Selective social engagement during commutes",
                "Interest in community events",
                "Word-of-mouth and app-based discovery"
              ]
            },
            {
              theme: "Safety Concerns",
              points: [
                "Well-lit roads importance",
                "City-specific safety issues",
                "Route modification for safety"
              ]
            },
            {
              theme: "Exploration Patterns",
              points: [
                "Limited motivation for new routes",
                "Interest in landmarks",
                "Established route preferences"
              ]
            }
          ].map((finding, index) => (
            <div key={index} className="highlight-box">
              <h3 className="text-cambridge-blue mb-2">{finding.theme}</h3>
              <ul className="space-y-2">
                {finding.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-tea-green" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Identified Problems</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              problem: "Limited Information Access",
              description: "Difficulty finding reliable, centralized sources for local events and safe routes"
            },
            {
              problem: "Safety Concerns",
              description: "Inadequate infrastructure and lighting affecting active transportation choices"
            },
            {
              problem: "Low Engagement",
              description: "Limited motivation to explore new routes or engage with community during commutes"
            }
          ].map((item, index) => (
            <div key={index} className="highlight-box">
              <h3 className="text-cambridge-blue mb-2">{item.problem}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
