import PageLayout from '../../../components/PageLayout';

export default function Conclusion() {
  return (
    <PageLayout title="Conclusion">
      <section className="content-section">
        <div className="section-title">
          <h2>Project Reflection</h2>
        </div>
        <div className="content-grid">
          <div className="highlight-box">
            <h3>Core Achievements</h3>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>Successfully identified and addressed active transportation needs</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tea-green" />
                <span>Created an engaging social experience around active transportation</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-light-pink" />
                <span>Developed innovative solutions for community building</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p>Our journey in creating Motion has been a valuable learning experience in user-centered design and iterative development. Through this project, we've learned the importance of balancing user needs with technical feasibility and social impact.</p>
            <p>The process of conducting user interviews, creating prototypes, and gathering feedback has given us practical insights into real-world application development.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Design Process Insights</h2>
        </div>
        <div className="content-grid">
          <div className="highlight-box">
            <h3>What Worked Well</h3>
            <div className="space-y-3 mt-4">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>Value-sensitive design approach helped prioritize user needs</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tea-green" />
                <span>Iterative prototyping revealed important usability insights</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-light-pink" />
                <span>User interviews provided valuable direction for features</span>
              </span>
            </div>
          </div>
          <div className="highlight-box">
            <h3>Future Considerations</h3>
            <div className="space-y-3 mt-4">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>Consider broader accessibility requirements earlier</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tea-green" />
                <span>Start with core features before adding complexity</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-light-pink" />
                <span>Include more diverse user perspectives in testing</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Team Reflection</h2>
        </div>
        <div className="content-grid">
          <div className="highlight-box">
            <h3>Team Strengths</h3>
            <div className="space-y-3 mt-4">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>Flexible meeting schedules maximized participation</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tea-green" />
                <span>Effective task division and responsibility sharing</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-light-pink" />
                <span>Organized task management using Linear</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>Regular meetings maintained accountability</span>
              </span>
            </div>
          </div>
          <div className="highlight-box">
            <h3>Areas for Improvement</h3>
            <div className="space-y-3 mt-4">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>Earlier project initiation for better collaboration</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tea-green" />
                <span>More frequent peer review of deliverables</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-light-pink" />
                <span>Enhanced communication and coordination</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>Better initial concept discussion and framing</span>
              </span>
            </div>
          </div>
        </div>
        <div className="highlight-box mt-8">
          <h3>Moving Forward</h3>
          <p className="mb-4">Our team's experience has highlighted the importance of balancing flexibility with structure. While our adaptable approach to meetings and task division worked well, earlier starts and more frequent check-ins would enhance our collaborative output.</p>
          <p>The use of project management tools proved valuable, but future projects would benefit from more robust peer review processes and earlier alignment on core concepts.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Looking Forward</h2>
        </div>
        <div className="highlight-box">
          <p className="mb-4">While Motion remains a prototype, the project has demonstrated the potential for technology to encourage active transportation and community building on campus. The lessons learned about user research, iterative design, and value-sensitive development will be valuable for future projects.</p>
          <p>Most importantly, this project has shown how user-centered design can address real community needs while promoting sustainable and healthy lifestyle choices.</p>
        </div>
      </section>
    </PageLayout>
  );
}
