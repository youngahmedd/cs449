import PageLayout from '../../../components/PageLayout';

export default function PaperPrototype() {
  return (
    <PageLayout title="Paper Prototype">
      <section className="content-section">
        <div className="section-title">
          <h2>Feature Designs</h2>
        </div>
        <div className="grid gap-8">
          {[
            {
              title: "Scenic Routes & Landmarks",
              persona: "Bob",
              description: "This feature allows users to discover and share local landmarks during their commute. The user flow starts with path selection, showing nearby points of interest, and enables real-time sharing of discoveries.",
              principles: [
                { name: "Feedback", details: "Shared stops appear in community tab, step count updates in real-time" },
                { name: "Affordance", details: "Clear button functions and intuitive option indicators" }
              ],
              imagePath: "/paper-prototype/feature1-flow.jpg"
            },
            {
              title: "Community Creation",
              persona: "Bob and Adi",
              description: "Enables users to join and create local communities, discover events, and connect with others sharing similar interests. The flow includes community discovery, event exploration, and social interaction features.",
              principles: [
                { name: "Mapping", details: "Intuitive icons for different sections (chat bubbles, calendar icons)" },
                { name: "Feedback", details: "Visual highlighting of active events and focused UI elements" }
              ],
              imagePath: "/paper-prototype/feature2-flow.jpg"
            },
            {
              title: "Route Selection",
              persona: "Joanne and Bob",
              description: "Provides flexible routing options prioritizing active transport while showcasing landmarks along the way. Users can preview routes and customize their journey preferences.",
              principles: [
                { name: "Discoverability", details: "Interactive category exploration and route customization" },
                { name: "Consistency", details: "Seamless transition between route selection and navigation" }
              ],
              imagePath: "/paper-prototype/feature3-flow.jpg"
            },
            {
              title: "Gamification System",
              persona: "Joanne",
              description: "Motivates active transportation through achievements, virtual pets, and social competition. Features include progress tracking, rewards, and community engagement.",
              principles: [
                { name: "Feedback", details: "Real-time statistics and achievement notifications" },
                { name: "Mapping", details: "Direct correlation between physical activity and virtual rewards" }
              ],
              imagePath: "/paper-prototype/feature4-flow.jpg"
            }
          ].map((feature, index) => (
            <div key={index} className="highlight-box">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-cambridge-blue mb-4">{feature.title}</h3>
                  <p className="mb-4">Persona: <span className="text-tea-green">{feature.persona}</span></p>
                  <p className="mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Design Principles:</h4>
                    {feature.principles.map((principle, i) => (
                      <div key={i} className="ml-4">
                        <span className="text-cambridge-blue">{principle.name}:</span> {principle.details}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative h-[300px] w-full">
                  <div className="absolute inset-0 flex items-center justify-center bg-cream/50 rounded-lg border-2 border-dashed border-cambridge-blue/30">
                    <p className="text-gray-500 italic">Feature Flow Sketch Pending</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Base Screens</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Map Pin Addition",
              description: "Allows users to add landmarks, events, or warnings to the map through a spiral selector interface. Includes location verification and filtering options.",
              imagePath: "/paper-prototype/base1.jpg"
            },
            {
              title: "Application Entry Point",
              description: "Main map view with search functionality and toggleable map overlays for landmarks, events, activity heatmap, and friend locations.",
              imagePath: "/paper-prototype/base2.jpg"
            },
            {
              title: "Navigation View",
              description: "Active navigation screen with options to add stops, share discoveries, and track progress through step counting.",
              imagePath: "/paper-prototype/base3.jpg"
            },
            {
              title: "Gamification Dashboard",
              description: "User metrics display with level progression, virtual pet interaction, badges, achievements, and social leaderboard.",
              imagePath: "/paper-prototype/base4.jpg"
            },
            {
              title: "Social Feed",
              description: "Friends activity feed showing achievements, event participation, and nearby commutes with search and notification features.",
              imagePath: "/paper-prototype/base5.jpg"
            }
          ].map((screen, index) => (
            <div key={index} className="highlight-box">
              <h3 className="text-cambridge-blue mb-4">{screen.title}</h3>
              <p className="mb-4">{screen.description}</p>
              <div className="relative h-[400px] w-full">
                <div className="absolute inset-0 flex items-center justify-center bg-cream/50 rounded-lg border-2 border-dashed border-cambridge-blue/30">
                  <p className="text-gray-500 italic">Base Screen Sketch Pending</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Complete Paper Prototype</h2>
        </div>
        <div className="highlight-box">
          <p className="mb-4">Our comprehensive paper prototype consists of 26 screens demonstrating the complete user flow across all features.</p>
          <div className="relative h-[600px] w-full">
            <div className="absolute inset-0 flex items-center justify-center bg-cream/50 rounded-lg border-2 border-dashed border-cambridge-blue/30">
              <p className="text-gray-500 italic">Full Paper Prototype Pending</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
