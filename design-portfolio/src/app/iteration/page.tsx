import PageLayout from '../../../components/PageLayout';
import Image from 'next/image';

export default function Iteration() {
  return (
    <PageLayout title="Design Iteration">
      <section className="content-section">
        <div className="section-title">
          <h2>Evaluation Process</h2>
        </div>
        <div className="grid gap-8">
          <div className="highlight-box">
            <h3 className="text-cambridge-blue mb-4">Test Plan Overview</h3>
            <p className="mb-4">Our evaluation focused on three core tasks designed to test essential app functionalities:</p>
            <div className="space-y-6">
              {[
                {
                  task: "Route Selection and Navigation",
                  description: "Testing users' ability to select and follow routes while discovering landmarks",
                  steps: [
                    "Enter destination",
                    "Choose preferred route based on preferences",
                    "Follow navigation",
                    "Interact with landmarks",
                    "Add new discoveries",
                    "Complete journey"
                  ]
                },
                {
                  task: "Social Interaction and Event Discovery",
                  description: "Evaluating friend connections and event participation features",
                  steps: [
                    "Search for friends",
                    "View friend activities",
                    "Discover local events",
                    "RSVP to events",
                    "Comment on activities",
                    "Share experiences"
                  ]
                },
                {
                  task: "Gamification and Achievement Tracking",
                  description: "Assessing engagement with rewards and progress tracking",
                  steps: [
                    "View profile statistics",
                    "Interact with virtual pet",
                    "Check leaderboard standings",
                    "Review badges and trophies",
                    "Track challenge progress",
                    "Monitor achievements"
                  ]
                }
              ].map((task, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-medium text-cambridge-blue">{task.task}</h4>
                  <p className="text-gray-600">{task.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {task.steps.map((step, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-tea-green" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="highlight-box">
            <h3 className="text-cambridge-blue mb-4">Evaluation Roles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Facilitator Responsibilities</h4>
                <ul className="space-y-2">
                  {[
                    "Guide participants through tasks",
                    "Ask probing questions about user experience",
                    "Maintain consistent testing environment",
                    "Document verbal feedback",
                    "Ensure think-aloud protocol"
                  ].map((duty, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                      <span>{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Wizard Responsibilities</h4>
                <ul className="space-y-2">
                  {[
                    "Simulate system responses",
                    "Handle unexpected interactions",
                    "Maintain 5-second response rule",
                    "Track interaction patterns",
                    "Note technical challenges"
                  ].map((duty, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-tea-green" />
                      <span>{duty}</span>
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
          <h2>Evaluation Findings</h2>
        </div>
        <div className="grid gap-8">
          {[
            {
              session: "First Evaluation",
              findings: [
                "Difficulty finding friend addition functionality",
                "Confusion with mystery landmark reveal mechanism",
                "Unclear purpose of frequency map",
                "Non-interactive activity posts"
              ],
              improvements: [
                "Redesigned friends system with intuitive add buttons",
                "Enhanced mystery landmark interaction",
                "Renamed and clarified map functionality",
                "Added post detail interaction"
              ]
            },
            {
              session: "Second Evaluation",
              findings: [
                "Unclear friend request system",
                "Pet stress concerns",
                "Confusing landmark logos in routes",
                "Navigation flow issues"
              ],
              improvements: [
                "Added notifications tab for friend requests",
                "Redesigned pet system to be more encouraging",
                "Improved landmark icon clarity",
                "Simplified navigation flow"
              ]
            },
            {
              session: "Final Evaluation",
              findings: [
                "Unclear badge system purpose",
                "Missing route start button",
                "Confusing profile icon",
                "Limited landmark addition options"
              ],
              improvements: [
                "Added feature information system",
                "Implemented clear start button",
                "Redesigned profile icon",
                "Added map hold-to-add functionality"
              ]
            }
          ].map((session, index) => (
            <div key={index} className="highlight-box">
              <h3 className="text-cambridge-blue mb-4">{session.session}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Key Findings</h4>
                  <ul className="space-y-2">
                    {session.findings.map((finding, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-light-pink" />
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Improvements</h4>
                  <ul className="space-y-2">
                    {session.improvements.map((improvement, i) => (
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
          <h2>Major Improvements</h2>
        </div>
        <div className="grid gap-8">
          {[
            {
              title: "Post Detail View",
              description: "Added detailed post view functionality to enhance social interaction",
              imagePath: "/iterations/post-detail.jpg"
            },
            {
              title: "Quick Landmark Addition",
              description: "Implemented hold-to-add landmark feature for faster interaction",
              imagePath: "/iterations/quick-landmark.jpg"
            },
            {
              title: "Enhanced Social Features",
              description: "Added friend request and notification system",
              imagePath: "/iterations/social-features.jpg"
            },
            {
              title: "Live Activity Map",
              description: "Renamed and improved activity visualization with clear indicators",
              imagePath: "/iterations/activity-map.jpg"
            },
            {
              title: "Friends Map Integration",
              description: "Added friend location tracking with event attendance visibility",
              imagePath: "/iterations/friends-map.jpg"
            }
          ].map((improvement, index) => (
            <div key={index} className="highlight-box">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-cambridge-blue mb-2">{improvement.title}</h3>
                  <p>{improvement.description}</p>
                </div>
                <div className="relative h-[200px]">
                  <div className="absolute inset-0 flex items-center justify-center bg-cream/50 rounded-lg border-2 border-dashed border-cambridge-blue/30">
                    <p className="text-gray-500 italic">Improvement Screenshot Pending</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
