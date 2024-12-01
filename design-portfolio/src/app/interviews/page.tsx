import PageLayout from '../../../components/PageLayout';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';

export default function Interviews() {
  const interviewees = [
    {
      type: "Mock Interview",
      participants: [
        {
          age: 22,
          gender: "M",
          profession: "Computer Science Student at UW",
          location: "Waterloo"
        }
      ]
    },
    {
      type: "Informational Interviews",
      participants: [
        {
          age: 20,
          gender: "M",
          profession: "Exchange Student from Singapore",
          location: "Waterloo"
        },
        {
          age: 21,
          gender: "M",
          profession: "Data Science Co-op/Student",
          location: "Toronto"
        },
        {
          age: 22,
          gender: "M",
          profession: "Young Adult (Full-time)",
          location: "Not Specified"
        },
        {
          age: 23,
          gender: "F",
          profession: "Student",
          location: "Not Specified"
        },
        {
          age: 35,
          gender: "M",
          profession: "Software Professional",
          location: "Seattle"
        },
        {
          age: 23,
          gender: "M",
          profession: "Post-grad Student",
          location: "Waterloo"
        },
        {
          age: 23,
          gender: "F",
          profession: "Software Engineering Intern",
          location: "Montreal"
        }
      ]
    }
  ];

  // Calculate demographics statistics
  const allParticipants = [
    ...interviewees[0].participants,
    ...interviewees[1].participants
  ];

  const stats = {
    averageAge: Math.round(
      allParticipants.reduce((sum, p) => sum + p.age, 0) / allParticipants.length
    ),
    genderDistribution: {
      M: allParticipants.filter(p => p.gender === "M").length,
      F: allParticipants.filter(p => p.gender === "F").length
    },
    locations: {
      Waterloo: allParticipants.filter(p => p.location === "Waterloo").length,
      Toronto: allParticipants.filter(p => p.location === "Toronto").length,
      Montreal: allParticipants.filter(p => p.location === "Montreal").length,
      Seattle: allParticipants.filter(p => p.location === "Seattle").length,
      Other: allParticipants.filter(p => p.location === "Not Specified").length
    }
  };

  return (
    <PageLayout title="User Interviews">
      <section className="content-section">
        <div className="section-title">
          <h2>Participant Demographics</h2>
        </div>
        
        {/* Demographics Overview */}
        <div className="grid gap-8">
          <div className="highlight-box">
            <h3 className="text-cambridge-blue mb-6">Demographics Overview</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Age Distribution */}
              <div className="bg-white/50 p-4 rounded-lg border border-cambridge-blue/20">
                <h4 className="font-medium mb-3">Age Distribution</h4>
                <div className="text-4xl font-bold text-cambridge-blue mb-2">
                  {stats.averageAge}
                </div>
                <p className="text-gray-500 text-sm">Average Age</p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Range:</span>
                    <span>20-35 years</span>
                  </div>
                </div>
              </div>

              {/* Gender Distribution */}
              <div className="bg-white/50 p-4 rounded-lg border border-cambridge-blue/20">
                <h4 className="font-medium mb-3">Gender Distribution</h4>
                <div className="relative h-32">
                  <div className="absolute inset-0 flex items-end">
                    <div 
                      className="w-1/2 bg-cambridge-blue rounded-t-lg mr-1"
                      style={{ height: `${(stats.genderDistribution.M / allParticipants.length) * 100}%` }}
                    >
                      <div className="text-center mt-2">{stats.genderDistribution.M}</div>
                    </div>
                    <div 
                      className="w-1/2 bg-tea-green rounded-t-lg ml-1"
                      style={{ height: `${(stats.genderDistribution.F / allParticipants.length) * 100}%` }}
                    >
                      <div className="text-center mt-2">{stats.genderDistribution.F}</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-around mt-2 text-sm text-gray-500">
                  <span>Male</span>
                  <span>Female</span>
                </div>
              </div>

              {/* Location Distribution */}
              <div className="bg-white/50 p-4 rounded-lg border border-cambridge-blue/20">
                <h4 className="font-medium mb-3">Location Distribution</h4>
                <div className="space-y-2">
                  {Object.entries(stats.locations).map(([location, count]) => (
                    count > 0 && (
                      <div key={location} className="relative">
                        <div className="flex justify-between text-sm mb-1">
                          <span>{location}</span>
                          <span>{count}</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full">
                          <div 
                            className="h-full bg-cambridge-blue rounded-full"
                            style={{ width: `${(count / allParticipants.length) * 100}%` }}
                          />
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Individual Participants (keep existing code) */}
          {interviewees.map((group, index) => (
            <div key={index} className="highlight-box">
              <h3 className="text-cambridge-blue mb-4">{group.type}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.participants.map((participant, i) => (
                  <div key={i} className="bg-white/50 p-4 rounded-lg border border-cambridge-blue/20">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-tea-green" />
                      <span className="font-medium">Participant {i + 1}</span>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-gray-500">Age:</span>
                        <span>{participant.age}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gray-500">Gender:</span>
                        <span>{participant.gender}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gray-500">Profession:</span>
                        <span className="text-sm">{participant.profession}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gray-500">Location:</span>
                        <span>{participant.location}</span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Research Analysis</h2>
        </div>
        <div className="grid gap-6">
          <div className="highlight-box">
            <h3>Work Model</h3>
            <p className="mb-4 text-gray-600">A work model visualizes how users currently navigate their transportation choices, highlighting key decision points, pain points, and environmental factors that influence their behavior.</p>
            <div className="relative h-[400px] w-full">
              <ImageModal
                src="/work-model.jpg"
                alt="Work model visualization of user research findings"
              />
            </div>
          </div>

          <div className="highlight-box">
            <h3>Affinity Diagram</h3>
            <p className="mb-4 text-gray-600">An affinity diagram organizes interview insights into related groups, helping us identify patterns and common themes across different user experiences and perspectives.</p>
            <div className="relative h-[400px] w-full">
              <ImageModal
                src="/affinity-diagram.jpg"
                alt="Affinity diagram showing interview data analysis"
              />
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
