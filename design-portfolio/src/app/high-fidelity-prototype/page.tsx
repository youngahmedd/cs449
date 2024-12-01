import PageLayout from '../../../components/PageLayout';
import Image from 'next/image';

export default function HighFidelityPrototype() {
  return (
    <PageLayout title="High-Fidelity Prototype">
      <section className="content-section">
        <div className="section-title">
          <h2>Design Philosophy</h2>
        </div>
        <div className="grid gap-8">
          <div className="highlight-box">
            <h3>Core Message</h3>
            <p className="mb-4">Motion aims to convey a sense of connectivity, eco-friendliness, and exploration, encouraging active transportation and community engagement.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Visual Identity</h4>
                <ul className="space-y-2">
                  {[
                    "Natural green tones for health and growth",
                    "Creamy yellow for playfulness and optimism",
                    "Circular shapes symbolizing community",
                    "Map gradients emphasizing exploration"
                  ].map((element, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                      <span>{element}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Design Principles</h4>
                <ul className="space-y-2">
                  {[
                    "Gestalt Proximity for intuitive grouping",
                    "Von Restorff Effect for key elements",
                    "Spatial Organization for clarity",
                    "Consistent Color Psychology",
                    "Clear Error Visibility"
                  ].map((principle, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-tea-green" />
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Design Critique Session</h2>
        </div>
        <div className="grid gap-6">
          {[
            {
              area: "Route Selection Interface",
              findings: [
                "Icon meanings unclear, especially scenic landmarks",
                "CO2 savings data needs context",
                "Mystery landmark reveal mechanism confusing"
              ],
              improvements: [
                "Added comprehensive icon legend",
                "Redesigned CO2 indicator with clear context",
                "Simplified mystery landmark interaction"
              ]
            },
            {
              area: "Visual Consistency",
              findings: [
                "Inconsistent color schemes across sections",
                "Pet page background too bright",
                "Profile page information density issues"
              ],
              improvements: [
                "Standardized color palette application",
                "Adjusted pet page color correction",
                "Restructured profile page layout"
              ]
            }
          ].map((critique, index) => (
            <div key={index} className="highlight-box">
              <h3 className="text-cambridge-blue mb-2">{critique.area}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Key Findings</h4>
                  <ul className="space-y-2">
                    {critique.findings.map((finding, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-light-pink" />
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Improvements Made</h4>
                  <ul className="space-y-2">
                    {critique.improvements.map((improvement, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
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
          <h2>Evaluation Planning</h2>
        </div>
        <div className="grid gap-8">
          <div className="highlight-box">
            <h3>Heuristic Evaluation Focus</h3>
            <div className="space-y-4">
              {[
                {
                  heuristic: "Aesthetic and Minimalist Design",
                  rationale: "Ensure clean interface focusing on core features of active transport and social connection"
                },
                {
                  heuristic: "Recognition Rather Than Recall",
                  rationale: "Verify intuitive recognition of navigation and social features"
                },
                {
                  heuristic: "User Control and Freedom",
                  rationale: "Confirm easy navigation and clear exit points throughout the app"
                },
                {
                  heuristic: "Error Prevention",
                  rationale: "Validate robust error handling in route planning and social interactions"
                },
                {
                  heuristic: "Consistency and Standards",
                  rationale: "Ensure coherent design patterns across all features"
                }
              ].map((item, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-medium text-cambridge-blue">{item.heuristic}</h4>
                  <p>{item.rationale}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="highlight-box">
            <h3>Cognitive Walkthrough Tasks</h3>
            <div className="space-y-6">
              {[
                {
                  scenario: "Route Navigation to E7",
                  steps: [
                    "Search for destination",
                    "Select route preferences",
                    "Start navigation",
                    "Add landmark during route",
                    "Complete journey"
                  ]
                },
                {
                  scenario: "Adding a New Friend",
                  steps: [
                    "Access social features",
                    "Search for friend",
                    "View profile",
                    "Send friend request",
                    "Confirm connection"
                  ]
                },
                {
                  scenario: "Challenge Progress Sharing",
                  steps: [
                    "Access profile",
                    "View challenges",
                    "Select specific challenge",
                    "Check progress",
                    "Share with friends"
                  ]
                }
              ].map((task, index) => (
                <div key={index}>
                  <h4 className="font-medium mb-2">{task.scenario}</h4>
                  <ul className="space-y-2">
                    {task.steps.map((step, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-tea-green" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Evaluation Results</h2>
        </div>
        <div className="grid gap-8">
          <div className="highlight-box">
            <h3>Heuristic Evaluation Findings</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-cambridge-blue mb-2">Aesthetic & Minimalist Design</h4>
              </div>
              <div>
                <h4 className="font-medium text-cambridge-blue mb-2">Recognition vs Recall</h4>
              </div>
              <div>
                <h4 className="font-medium text-cambridge-blue mb-2">User Control & Freedom</h4>
              </div>
              <div>
                <h4 className="font-medium text-cambridge-blue mb-2">Error Prevention</h4>
              </div>
              <div>
                <h4 className="font-medium text-cambridge-blue mb-2">Consistency & Standards</h4>
              </div>
            </div>
          </div>

          <div className="highlight-box">
            <h3>Cognitive Walkthrough Results</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Route Navigation to E7</h4>
              </div>
              <div>
                <h4 className="font-medium mb-2">Adding a New Friend</h4>
              </div>
              <div>
                <h4 className="font-medium mb-2">Challenge Progress Sharing</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
