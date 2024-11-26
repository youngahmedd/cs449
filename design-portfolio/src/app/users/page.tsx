import PageLayout from '../../../components/PageLayout';

export default function Users() {
  return (
    <PageLayout title="Target Users">
      <section className="content-section">
        <div className="section-title">
          <h2>User Personas</h2>
        </div>
        <div className="grid gap-6">
          {[
            {
              name: "Sarah Chen",
              role: "Senior Motion Designer",
              goals: ["Streamline workflow", "Maintain design consistency", "Collaborate effectively"],
              painPoints: ["Complex software", "Time-consuming processes", "Version control issues"]
            },
            {
              name: "Marcus Rodriguez",
              role: "UI/UX Designer",
              goals: ["Create engaging animations", "Quick prototyping", "Easy handoff"],
              painPoints: ["Limited animation knowledge", "Technical barriers", "Integration challenges"]
            }
          ].map((persona, index) => (
            <div key={index} className="highlight-box p-6">
              <h3 className="text-cambridge-blue mb-4">{persona.name}</h3>
              <p className="text-tea-green mb-2">{persona.role}</p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <h4 className="font-semibold mb-2">Goals</h4>
                  <ul className="space-y-2">
                    {persona.goals.map((goal, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Pain Points</h4>
                  <ul className="space-y-2">
                    {persona.painPoints.map((pain, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-light-pink" />
                        <span>{pain}</span>
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
          <h2>Empathy Maps</h2>
        </div>
        <div className="content-grid">
          <div className="highlight-box">
            <h3>Thoughts & Feelings</h3>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>Frustrated with current tools</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tea-green" />
                <span>Eager to improve workflow</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-light-pink" />
                <span>Concerned about learning curve</span>
              </li>
            </ul>
          </div>
          <div className="highlight-box">
            <h3>Behaviors & Actions</h3>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>Searches for tutorials</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tea-green" />
                <span>Experiments with new tools</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-light-pink" />
                <span>Seeks advice from peers</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>User Groups</h2>
        </div>
        <div className="grid gap-6">
          {[
            {
              name: "Design Enthusiasts",
              description: "A group of designers passionate about creating engaging user experiences."
            },
            {
              name: "Agile Developers",
              description: "A group of developers focused on delivering high-quality software quickly."
            },
            {
              name: "Project Managers",
              description: "A group of professionals responsible for managing project timelines and resources."
            }
          ].map((group, index) => (
            <div key={index} className="highlight-box p-6">
              <h3 className="text-cambridge-blue mb-4">{group.name}</h3>
              <p className="text-tea-green mb-2">{group.description}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
