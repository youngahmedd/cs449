import PageLayout from '../../../components/PageLayout';
import Image from 'next/image';

export default function Users() {
  return (
    <PageLayout title="Target Users">
      <section className="content-section">
        <div className="section-title">
          <h2>Brainstormed Personas</h2>
        </div>
        <div className="grid gap-8">
          {[
            {
              name: "Joanne",
              role: "Student Persona",
              image: "/personas/joanne.jpg",
              description: "A 21-year-old student at the University of Waterloo who walks to class daily.",
              goals: [
                "Stay active",
                "Feel safe",
                "Make commute more enjoyable"
              ],
              frustrations: [
                "Boring commutes",
                "Fear of strangers",
                "Difficulty coordinating with friends"
              ]
            },
            {
              name: "Bob",
              role: "New Graduate Persona",
              image: "/personas/bob.jpg",
              description: "A 23-year-old who has just moved to Toronto and is exploring his new city.",
              goals: [
                "Make new connections",
                "Discover hidden gems",
                "Engage more with surroundings"
              ],
              frustrations: [
                "Boredom and isolation",
                "Over-reliance on generic navigation tools",
                "Difficulty finding local events and spots"
              ]
            },
            {
              name: "Adi",
              role: "Professional Persona",
              image: "/personas/adi.jpg",
              description: "A 30-year-old professor at UBC who wants to stay active and connected.",
              goals: [
                "Use walking for exercise and social engagement",
                "Stay connected with friends",
                "Reduce environmental impact"
              ],
              frustrations: [
                "Feeling lonely while walking",
                "High transportation costs",
                "Lack of time-efficient active options"
              ]
            }
          ].map((persona, index) => (
            <div key={index} className="highlight-box p-6">
              <div className="flex flex-col gap-6">
                <div className="relative h-[300px] w-full">
                  <Image
                    src={persona.image}
                    alt={`${persona.name}'s persona`}
                    fill
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-cambridge-blue mb-2">{persona.name}</h3>
                  <p className="text-tea-green mb-4">{persona.role}</p>
                  <p className="mb-4">{persona.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
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
                      <h4 className="font-semibold mb-2">Frustrations</h4>
                      <ul className="space-y-2">
                        {persona.frustrations.map((frustration, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-light-pink" />
                            <span>{frustration}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Identified User Groups</h2>
        </div>
        <div className="grid gap-6">
          {[
            {
              title: "Students Commuting to School",
              demographics: "University students aged 19-24",
              goals: [
                "Get to class on time",
                "Feel safe while commuting",
                "Incorporate exercise into daily routine"
              ],
              painPoints: [
                "Walking is boring or intimidating when alone",
                "Concerns about safety in unfamiliar areas",
                "Challenges finding peers with matching schedules"
              ]
            },
            {
              title: "Newcomers to a City",
              demographics: "Recent graduates aged 23-30",
              goals: [
                "Discover new places and local spots",
                "Build new social connections",
                "Expand network"
              ],
              painPoints: [
                "Feeling isolated in unfamiliar environment",
                "Struggling to find events beyond mainstream",
                "Boredom during solo walks"
              ]
            },
            {
              title: "Professionals Commuting to Work",
              demographics: "Working professionals aged 30+",
              goals: [
                "Incorporate healthier routines",
                "Connect with friends/colleagues",
                "Stay socially engaged during commutes"
              ],
              painPoints: [
                "Reliance on cars despite preferring healthy options",
                "Lack of motivation when walking feels isolating",
                "High commuting costs but no satisfying alternatives"
              ]
            }
          ].map((group, index) => (
            <div key={index} className="highlight-box p-6">
              <h3 className="text-cambridge-blue mb-2">{group.title}</h3>
              <p className="text-tea-green mb-4">Demographics: {group.demographics}</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Goals</h4>
                  <ul className="space-y-2">
                    {group.goals.map((goal, i) => (
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
                    {group.painPoints.map((pain, i) => (
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
          <h2>Empathy Map</h2>
        </div>
        <div className="space-y-8">
          <div className="relative h-[500px] w-full">
            <Image
              src="/empathy-map.jpg"
              alt="User empathy map"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Think & Feel",
                points: [
                  "Walking to and from class is boring, time-consuming, and unsafe",
                  "Moved to a new city, doesn't know anyone",
                  "Getting bored of usual commute",
                  "Thinks daily commute is a bit bland",
                  "Feels disconnected from their friends and local community"
                ]
              },
              {
                title: "See",
                points: [
                  "Buildings far off streets",
                  "Buses can be late",
                  "Limited free parking near campus",
                  "Fellow professors take public transport to work",
                  "Spouse usually takes car to work",
                  "Sees new things on commute"
                ]
              },
              {
                title: "Say & Do",
                points: [
                  "Enjoys walking and getting fresh air",
                  "Asks friends who live nearby to walk together, but they are not always available",
                  "Likes getting out and walking around city",
                  "No friends so open to meeting new people",
                  "tries to find local event online"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="highlight-box">
                <h3 className="text-cambridge-blue mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-tea-green" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Hear",
                points: [
                  "Shortcut near their residence",
                  "Friends live close to campus",
                  "Mainly only hears things from co-workers",
                  "Complaints about long walks home",
                ]
              },
              {
                title: "Pain",
                points: [
                  "Being late to class",
                  "Getting approached by strangers at night",
                  "Buses can be unreliable",
                  "Long hours at their desk",
                  "Feels like not truly “experiencing” the city."
                ]
              },
              {
                title: "Gain",
                points: [
                  "Opportunity to exercise",
                  "Feel safe",
                  "Get to class on time",
                  "Getting out more and fresh air",
                  "Discover new things during their commute",
                  "New routes or shortcuts that show what locals do"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="highlight-box">
                <h3 className="text-cambridge-blue mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-tea-green" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
