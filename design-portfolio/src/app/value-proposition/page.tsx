import PageLayout from '../../../components/PageLayout';
import ImageModal from '../../components/ImageModal';

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
            <p>For some people, it would be infeasible to walk rather than take buses or drive because of the significant differences in time it would take. For others, they would stay at home doing other forms of social interaction, rather than getting some fresh air by taking a walk outside. Out of all the people who do not utilize active transport, we narrowed down the target audience for our app to students and working professionals living in cities. These people often commute to a lot of places but find walking not socially engaging enough to be worthwhile.</p>
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
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-cambridge-blue mb-2">Active Transportation Barriers</h4>
                <ul className="space-y-2">
                  {[
                    "Lack of motivation for regular walking activities",
                    "Limited awareness of interesting local routes",
                    "Missing social connection in daily commutes",
                    "Insufficient engagement with local community spaces"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-light-pink" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-cambridge-blue mb-2">Solution Approach</h4>
                <ul className="space-y-2">
                  {[
                    "Gamified walking experience with virtual pet companion",
                    "Community-curated landmarks and points of interest",
                    "Social features integrated into daily routes",
                    "Real-time community engagement opportunities"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-tea-green" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="highlight-box">
            <h3>Project Focus</h3>
            <div className="space-y-4">
              <p>Our project addresses three core problems in active transportation:</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
                  <span>
                    <strong>Motivation Gap:</strong> Traditional fitness apps lack engaging social elements that could make active transportation more appealing for daily use.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-tea-green" />
                  <span>
                    <strong>Awareness Gap:</strong> People often commute to a lot of places but find walking unengaging and uninvolved.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-light-pink" />
                  <span>
                    <strong>Social Connection Gap:</strong> Traditional fitness apps lack social connection in daily commutes.
                  </span>
                </li>
              </ul>
            </div>
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

      <section className="content-section">
        <div className="section-title">
          <h2>Initial Brainstorming</h2>
        </div>
        <div className="content-grid">
          <div className="highlight-box">
            <h3>Feature Brainstorm</h3>
            <div className="relative h-[400px] w-full">
              <ImageModal
                src="/feature-brainstorm.jpg"
                alt="Initial feature brainstorming session results"
              />
            </div>
          </div>
          <div className="space-y-4">
            <p>Our initial brainstorming session focused on identifying key features that would address the core problems while promoting active transportation and community engagement.</p>
            <p>Through collaborative discussion and ideation, we explored various possibilities for encouraging sustainable transportation habits while building social connections.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}