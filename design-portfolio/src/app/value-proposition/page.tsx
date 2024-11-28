import PageLayout from '../../../components/PageLayout';

export default function ValueProposition() {
  return (
    <PageLayout title="Value Proposition">
      <section className="content-section">
        <div className="section-title">
          <h2>Our Vision</h2>
        </div>
        <div className="content-grid">
          <div className="highlight-box">
            <h3>Core Mission</h3>
            <p>Our app seeks to make walking a socially engaging and fulfilling experience. By adding social and gamified elements to active transportation, we aim to promote healthier lifestyles, reduce reliance on cars, and encourage community connections.</p>
            <p>Through innovative features and thoughtful design, we enable users to rediscover their communities, make meaningful social connections, and reduce environmental impact through sustainable commuting habits.</p>
          </div>
          <div className="highlight-box">
            <h3>Impact Goals</h3>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>Rediscover communities through active exploration</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tea-green" />
                <span>Foster meaningful local connections</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-light-pink" />
                <span>Promote sustainable urban mobility</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Market Segment</h2>
        </div>
        <div className="content-grid">
          <div className="highlight-box">
            <h3>Target Audience</h3>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>Students</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tea-green" />
                <span>Working professionals</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p>For some people, it would be infeasible to walk rather than take buses or drive because of the significant differences in time it would take. For others, they would stay at home doing other forms of social interaction, rather than getting some fresh air by taking a walk outside.</p>
            <p>These people often commute to a lot of places but find walking unengaging and uninvolved. These are people for whom commuting through familiar routes feels bland or lacking in surprises, making active transportation an unattractive option. These individuals are tech-savvy, socially driven, and willing to adopt digital solutions for convenience and lifestyle enhancement. Finally, since the target group usually uses a lot of social media in their daily lives, what if this social media helps them have a healthier life by motivating them to walk?</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Problem Space</h2>
        </div>
        <div className="content-grid">
          <div className="highlight-box">
            <h3>Identified Niches</h3>
            <p className="text-gray-500 italic">Content pending: Description of problems and empty niches originally identified and how the project addressed them.</p>
          </div>
          <div className="highlight-box">
            <h3>Project Focus</h3>
            <p className="text-gray-500 italic">Content pending: Specific problems that became the focus of the project.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Focus Areas</h2>
        </div>
        <div className="content-grid">
          <div className="highlight-box">
            <h3>Key Solutions</h3>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>Gamified walking experience with social rewards</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tea-green" />
                <span>Community-driven points of interest and events</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-light-pink" />
                <span>Real-time social interaction features</span>
              </li>
            </ul>
          </div>
          <div className="highlight-box">
            <h3>Expected Impact</h3>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                <span>30% increase in walking activity</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tea-green" />
                <span>50% boost in local community engagement</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-light-pink" />
                <span>20% reduction in car usage for short trips</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}