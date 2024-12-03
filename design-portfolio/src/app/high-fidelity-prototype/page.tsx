import PageLayout from '../../../components/PageLayout';
import Image from 'next/image';
import ImageModal from '../../components/ImageModal';
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
        <p className="mb-6 text-gray-600">After completing our initial high-fidelity prototype, we conducted a comprehensive design critique session with our peers and instructors. This session helped identify key usability issues and areas for improvement across different aspects of our interface. The feedback gathered was instrumental in refining our design for the final iteration.</p>
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
        <p className="mb-6 text-gray-600">After implementing our initial round of improvements based on the design critique session, we planned comprehensive heuristic evaluations and cognitive walkthroughs. These evaluation methods were chosen to identify any remaining usability issues and ensure our refined design met user needs effectively.</p>
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
                <h4 className="font-medium text-cambridge-blue mb-2">Confirmation Actions</h4>
                <p className="mb-4">Added confirmation pop-ups for important actions to prevent accidental interactions and increase user control. This includes friend requests, navigation endings, post creation, and sharing features. Users reported feeling more confident in their actions with the added safety net of confirmation dialogs.</p>
              </div>
              <div>
                <h4 className="font-medium text-cambridge-blue mb-2">Navigation Improvements</h4>
                <p className="mb-4">Enhanced button sizes and placement for better accessibility and navigation flow. Added missing back buttons and increased tap target sizes for improved usability across different devices and user needs. Special attention was given to one-handed operation scenarios and users with varying levels of motor control.</p>
              </div>
              <div>
                <h4 className="font-medium text-cambridge-blue mb-2">Activity Feed Redesign</h4>
                <p className="mb-4">Simplified the activity feed layout by removing drop shadows and chat-like elements, creating a clearer distinction between social updates and conversations. The new design emphasizes chronological order and content hierarchy while maintaining visual consistency with the rest of the application.</p>
              </div>
              <div>
                <h4 className="font-medium text-cambridge-blue mb-2">Error Prevention Measures</h4>
                <p className="mb-4">Implemented proactive error prevention through input validation, clear action buttons, and undo functionality. Added tooltips and helper text to guide users through complex interactions and prevent common mistakes in route planning and social features.</p>
              </div>
            </div>
          </div>

          <div className="highlight-box">
            <h3>Cognitive Walkthrough Results</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Successes</h4>
                <ul className="space-y-2">
                  {[
                    "Effective undo and back button implementation across all features",
                    "Clean, minimalist design approach that reduces cognitive load",
                    "Intuitive activity feed engagement with clear social context",
                    "Consistent navigation patterns throughout the application",
                    "Clear feedback for user actions and system status",
                    "Efficient landmark discovery and sharing process"
                  ].map((success, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                      <span>{success}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Challenges</h4>
                <ul className="space-y-2">
                  {[
                    "Multiple landmark navigation organization needs improvement",
                    "Inconsistent button styling across different sections",
                    "Activity feed visual confusion with chat interfaces",
                    "Complex gesture interactions need better indicators",
                    "Information hierarchy in profile views needs refinement",
                    "Pet interaction feedback could be more immediate"
                  ].map((challenge, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-light-pink" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Planned Improvements</h4>
                <ul className="space-y-2">
                  {[
                    "Implement landmark ordering system with drag-and-drop functionality",
                    "Standardize button design patterns across the entire application",
                    "Refine activity feed visual hierarchy and interaction patterns",
                    "Add confirmation dialogs for critical actions with clear consequences",
                    "Enhance gesture discovery through subtle visual cues",
                    "Improve immediate feedback for pet interactions and achievements",
                    "Implement progressive disclosure for complex features"
                  ].map((improvement, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-tea-green" />
                      <span>{improvement}</span>
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
          <h2>High-Fidelity Prototype Iterations</h2>
        </div>
        <div className="grid gap-8">
          <div className="highlight-box">
            <h3>Initial High-Fidelity Design</h3>
            <p className="mb-4 text-gray-600">Our initial high-fidelity prototype incorporated the core features and design elements from our low-fidelity testing, with refined visual design and interaction patterns.</p>
            <div className="grid gap-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative h-[500px] w-full">
                  <ImageModal
                    src="/initial-hifi-1.jpg"
                    alt="Initial high-fidelity prototype - Navigation and Route Planning"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative h-[500px] w-full">
                  <ImageModal
                    src="/initial-hifi-2.jpg"
                    alt="Initial high-fidelity prototype - Social Features"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative h-[500px] w-full">
                  <ImageModal
                    src="/initial-hifi-3.jpg"
                    alt="Initial high-fidelity prototype - Pet Interaction"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <h4 className="font-medium text-cambridge-blue">Key Features</h4>
              <ul className="space-y-2">
                {[
                  "Basic route planning with landmark discovery",
                  "Initial social feed implementation",
                  "Simple pet interaction system",
                  "Core navigation structure"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-tea-green" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="highlight-box">
            <h3>Refined High-Fidelity Design</h3>
            <p className="mb-4 text-gray-600">Following our evaluation phase, we implemented significant improvements based on user feedback and heuristic evaluation findings. Through a combination of design critique sessions, heuristic evaluations, cognitive walkthroughs, and prototype evaluation interviews, we iteratively refined our design to create a more intuitive and user-friendly final prototype that better serves our target users' needs.</p>
            <div className="grid gap-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative h-[500px] w-full">
                  <ImageModal
                    src="/final-hifi-1.jpg"
                    alt="Refined high-fidelity prototype - Enhanced Navigation"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative h-[500px] w-full">
                  <ImageModal
                    src="/final-hifi-2.jpg"
                    alt="Refined high-fidelity prototype - Improved Social Features"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative h-[500px] w-full">
                  <ImageModal
                    src="/final-hifi-3.jpg"
                    alt="Refined high-fidelity prototype - Updated Pet System"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <h4 className="font-medium text-cambridge-blue">Key Improvements</h4>
              <ul className="space-y-2">
                {[
                  "Enhanced confirmation dialogs for critical actions",
                  "Redesigned activity feed with clear visual hierarchy",
                  "Improved navigation with larger touch targets",
                  "Standardized button styling across all screens",
                  "Added progressive disclosure for complex features",
                  "Implemented drag-and-drop landmark ordering"
                ].map((improvement, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-light-pink" />
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
