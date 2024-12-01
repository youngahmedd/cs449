import PageLayout from '../../../components/PageLayout';
import Image from 'next/image';

export default function InitialDesign() {
  return (
    <PageLayout title="Initial Design">
      <section className="content-section">
        <div className="section-title">
          <h2>Initial Brainstorming</h2>
        </div>
        <div className="content-grid">
          <div className="highlight-box">
            <h3>Original Features</h3>
            <ul className="space-y-4">
              {[
                {
                  feature: "Scenic Route Planning",
                  argument: "Allow users to explore different routes while transiting and share their findings with others"
                },
                {
                  feature: "Community Creation",
                  argument: "Enable users to connect with others in their community with similar interests"
                },
                {
                  feature: "Smart Route Algorithm",
                  argument: "Pick the best route based on user preferences for attractions and transportation modes"
                },
                {
                  feature: "Gamification System",
                  argument: "Give users a sense of accomplishment and encourage more active transportation use"
                }
              ].map((item, index) => (
                <li key={index} className="space-y-2">
                  <div className="font-medium text-cambridge-blue">{item.feature}</div>
                  <p className="text-gray-600">{item.argument}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <p>Our initial brainstorming session focused on identifying features that would address the core problems discovered during user interviews while promoting active transportation and community engagement.</p>
            <p>These initial features were then refined through VSD envisioning cards and user story development to better align with our core values and user needs.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>VSD Envisioning Cards Analysis</h2>
        </div>
        <div className="grid gap-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Indirect Stakeholders",
                imagePath: "/vsd/indirect-stakeholders.jpg"
              },
              {
                title: "Long-term Health & Wellness",
                imagePath: "/vsd/health-wellness.jpg"
              },
              {
                title: "Widespread Use",
                imagePath: "/vsd/widespread-use.jpg"
              }
            ].map((card, index) => (
              <div key={index} className="highlight-box">
                <h3 className="text-lg font-medium mb-4">{card.title}</h3>
                <div className="relative h-[200px] w-full">
                  <div className="absolute inset-0 flex items-center justify-center bg-cream/50 rounded-lg border-2 border-dashed border-cambridge-blue/30">
                    <p className="text-gray-500 italic">VSD Card Image Pending</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="highlight-box">
            <h3>Value Analysis Impact</h3>
            <p>Through our VSD card analysis, we identified key values that shaped our feature refinement:</p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>Long-term community health improvement through consistent cardiovascular activity</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tea-green" />
                <span>Enhanced social connectedness within local communities</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-light-pink" />
                <span>Sustainable transportation habits through feasible route options</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Feature Iterations</h2>
        </div>
        <div className="grid gap-8">
          {[
            {
              title: "Scenic Routes & Landmarks",
              userStories: [
                "Get more engaged in commute through local landmarks",
                "Choose paths based on points of interest",
                "Share discoveries with others",
                "Receive route recommendations"
              ],
              crazyEightImage: "/sketches/crazy8-scenic.jpg",
              storyboardImage: "/sketches/storyboard-scenic.jpg"
            },
            {
              title: "Community Creation",
              userStories: [
                "Create and join neighborhood communities",
                "Connect with others sharing similar interests",
                "Find and communicate with community members",
                "Participate in local events"
              ],
              crazyEightImage: "/sketches/crazy8-community.jpg",
              storyboardImage: "/sketches/storyboard-community.jpg"
            },
            {
              title: "Smart Route Planning",
              userStories: [
                "Use active transport for feasible portions",
                "Select preferred active segments",
                "Receive mixed-mode route recommendations",
                "Compare efficiency and points of interest"
              ],
              crazyEightImage: "/sketches/crazy8-routes.jpg",
              storyboardImage: "/sketches/storyboard-routes.jpg"
            },
            {
              title: "Gamification System",
              userStories: [
                "Track progress for motivation",
                "Unlock achievements and badges",
                "Level up through active transport use",
                "Share progress with friends"
              ],
              crazyEightImage: "/sketches/crazy8-gamification.jpg",
              storyboardImage: "/sketches/storyboard-gamification.jpg"
            }
          ].map((feature, index) => (
            <div key={index} className="highlight-box p-6">
              <h3 className="text-cambridge-blue mb-4">{feature.title}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-2">User Stories</h4>
                  <ul className="space-y-2">
                    {feature.userStories.map((story, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-tea-green" />
                        <span>{story}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Crazy 8s Sketch</h4>
                    <div className="relative h-[200px] w-full">
                      <div className="absolute inset-0 flex items-center justify-center bg-cream/50 rounded-lg border-2 border-dashed border-cambridge-blue/30">
                        <p className="text-gray-500 italic">Crazy 8s Sketch Pending</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Storyboard</h4>
                    <div className="relative h-[200px] w-full">
                      <div className="absolute inset-0 flex items-center justify-center bg-cream/50 rounded-lg border-2 border-dashed border-cambridge-blue/30">
                        <p className="text-gray-500 italic">Storyboard Pending</p>
                      </div>
                    </div>
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
