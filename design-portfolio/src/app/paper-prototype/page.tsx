import PageLayout from '../../../components/PageLayout';
import ImageModal from '../../components/ImageModal';

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
              imagePath: "/routeLandmarks.jpg"
            },
            {
              title: "Community Creation",
              persona: "Bob and Adi",
              description: "Enables users to join and create local communities, discover events, and connect with others sharing similar interests. The flow includes community discovery, event exploration, and social interaction features.",
              principles: [
                { name: "Mapping", details: "Intuitive icons for different sections (chat bubbles, calendar icons)" },
                { name: "Feedback", details: "Visual highlighting of active events and focused UI elements" }
              ],
              imagePath: "/community.jpg"
            },
            {
              title: "Route Selection",
              persona: "Joanne and Bob",
              description: "Provides flexible routing options prioritizing active transport while showcasing landmarks along the way. Users can preview routes and customize their journey preferences.",
              principles: [
                { name: "Discoverability", details: "Interactive category exploration and route customization" },
                { name: "Consistency", details: "Seamless transition between route selection and navigation" }
              ],
              imagePath: "/routeSelection.jpg"
            },
            {
              title: "Gamification System",
              persona: "Joanne",
              description: "Motivates active transportation through achievements, virtual pets, and social competition. Features include progress tracking, rewards, and community engagement.",
              principles: [
                { name: "Feedback", details: "Real-time statistics and achievement notifications" },
                { name: "Mapping", details: "Direct correlation between physical activity and virtual rewards" }
              ],
              imagePath: "/gamify.jpg"
            }
          ].map((feature, index) => (
            <div key={index} className="highlight-box">
              <h3 className="text-cambridge-blue mb-4">{feature.title}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-4">{feature.description}</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Design Principles</h4>
                      {feature.principles.map((principle, i) => (
                        <div key={i} className="mb-2">
                          <div className="font-medium text-tea-green">{principle.name}</div>
                          <p className="text-gray-600">{principle.details}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative h-[400px] w-full">
                    <ImageModal
                      src={feature.imagePath}
                      alt={`Paper prototype for ${feature.title}`}
                    />
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
              imagePath: "/base1.jpg"
            },
            {
              title: "Application Entry Point",
              description: "Main map view with search functionality and toggleable map overlays for landmarks, events, activity heatmap, and friend locations.",
              imagePath: "/base2.jpg"
            },
            {
              title: "Navigation View",
              description: "Active navigation screen with options to add stops, share discoveries, and track progress through step counting.",
              imagePath: "/base3.jpg"
            },
            {
              title: "Gamification Dashboard",
              description: "User metrics display with level progression, virtual pet interaction, badges, achievements, and social leaderboard.",
              imagePath: "/base4.jpg"
            },
            {
              title: "Social Feed",
              description: "Friends activity feed showing achievements, event participation, and nearby commutes with search and notification features.",
              imagePath: "/base5.jpg"
            }
          ].map((screen, index) => (
            <div key={index} className="highlight-box">
              <h3 className="text-cambridge-blue mb-4">{screen.title}</h3>
              <p className="mb-4">{screen.description}</p>
              <div className="relative h-[400px] w-full">
                <ImageModal
                  src={screen.imagePath}
                  alt={`Base screen for ${screen.title}`}
                />
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
          <p className="mb-6">Our comprehensive paper prototype consists of 26 screens demonstrating the complete user flow across all features, from initial navigation to social interactions and gamification elements.</p>
          <div className="grid gap-8">
            {[
              {
                title: "Front Page",
                description: "Landing screen that includes a map that shows nearby landmarks, allowing user to start navigation or add landmarks/events, and shows a scaffold of nearby recommended activities",
                imagePath: "/final-paper/figure1.png"
              },
              {
                title: "Front Page Interactive Components",
                description: "Showing the available interactive components on the front page. The add button can add events or landmarks, and the dropdown can select available view on map",
                imagePath: "/final-paper/figure2.png"
              },
              {
                title: "Location Selection",
                description: "Search, select or enter your destination to begin a tailored walking and discovery experience",
                imagePath: "/final-paper/figure3.png"
              },
              {
                title: "Route Selection",
                description: "Choose from recommended routes based on preferences, including scenic paths and landmark-rich options",
                imagePath: "/final-paper/figure4.png"
              },
              {
                title: "Route Preferences",
                description: "Adjust route preferences like preferred landmarks, and transit integration for a customized walk",
                imagePath: "/final-paper/figure5.png"
              },
              {
                title: "Navigation View",
                description: "Walk along the chosen route with real-time guidance and interactive map features",
                imagePath: "/final-paper/figure6.png"
              },
              {
                title: "Nearby Landmark List",
                description: "A list of landmarks along your route",
                imagePath: "/final-paper/figure7.png"
              },
              {
                title: "Hidden Landmark Reveal",
                description: "Reveal and unlock hidden landmark when walking nearby",
                imagePath: "/final-paper/figure8.png"
              },
              {
                title: "Landmark Details",
                description: "Descriptions, images, user comments, and sharing options",
                imagePath: "/final-paper/figure9.png"
              },
              {
                title: "Add Landmark",
                description: "Inputting details, photos, and settings to share points of interest with the community",
                imagePath: "/final-paper/figure10.png"
              },
              {
                title: "Navigation Summary",
                description: "View your completed route summary with stats, achievements earned, and sharing options",
                imagePath: "/final-paper/figure11.png"
              },
              {
                title: "Discovery Scaffold",
                description: "Explore upcoming events, local happenings, and new challenges tailored to user interests",
                imagePath: "/final-paper/figure12.png"
              },
              {
                title: "Event Details",
                description: "Check event details, RSVP, and see which friends are attending upcoming events or social gatherings",
                imagePath: "/final-paper/figure13.png"
              },
              {
                title: "Activity Feed",
                description: "Scroll through a feed of recent activities, shared landmarks, and community interactions from friends, or public",
                imagePath: "/final-paper/figure14.png"
              },
              {
                title: "Activity Comments",
                description: "Engage with activities by adding comments, reactions, and sharing feedback",
                imagePath: "/final-paper/figure15.png"
              },
              {
                title: "User Search",
                description: "Find other users by name to expand social network",
                imagePath: "/final-paper/figure16.png"
              },
              {
                title: "User Profile Overview",
                description: "View and manage your profile, and an option to edit personal details, and stats and pet to view, and your activities",
                imagePath: "/final-paper/figure17.png"
              },
              {
                title: "User Profile Details",
                description: "Scroll down to see more with badges, leaderboard, trophy, current challenge",
                imagePath: "/final-paper/figure18.png"
              },
              {
                title: "Profile Edit",
                description: "Update profile details, interests, and preferences to personalize your app experience",
                imagePath: "/final-paper/figure19.png"
              },
              {
                title: "Pet Details",
                description: "Interact with your virtual pet, feeding, and levelling it up based on earned activity points",
                imagePath: "/final-paper/figure20.png"
              },
              {
                title: "Badge Collection",
                description: "Review badges earned from visiting landmarks and completing challenges, displayed in a collectible grid",
                imagePath: "/final-paper/figure21.png"
              },
              {
                title: "Trophy List",
                description: "See a list of trophies for major milestones, completed challenges, and social achievements",
                imagePath: "/final-paper/figure22.png"
              },
              {
                title: "Trophy Details",
                description: "View detailed information on each trophy, including criteria met and date earned",
                imagePath: "/final-paper/figure23.png"
              },
              {
                title: "Leaderboard",
                description: "Check leaderboard rankings and see where you stand among friends in walking activities",
                imagePath: "/final-paper/figure24.png"
              },
              {
                title: "Challenge Details",
                description: "View challenge objectives, participant list, and current status, with options to join or share",
                imagePath: "/final-paper/figure25.png"
              },
              {
                title: "User Activity Profile",
                description: "Visit profile to see recent activities posted by the user",
                imagePath: "/final-paper/figure26.png"
              }
            ].map((figure, index) => (
              <div key={index} className="border-b border-cambridge-blue/20 last:border-b-0 pb-8 last:pb-0">
                <h3 className="text-cambridge-blue mb-2">Figure {index + 1}. {figure.title}</h3>
                <p className="mb-4 text-gray-600">{figure.description}</p>
                <div className="relative h-[500px] w-full">
                  <ImageModal
                    src={figure.imagePath}
                    alt={`Paper prototype figure ${index + 1}: ${figure.title}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
