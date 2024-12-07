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
            <h3>The Problem</h3>
            <p className="mb-4">Active transportation is significantly underutilized in modern cities, particularly in North America. Only 1.2% of the land mass of the largest 35 metropolitan areas in the US are walkable urban areas (World Economic Forum, 2023). This trend is worsening with time - the percentage of schoolchildren who biked or walked decreased from 42% in 1969 to 10.4% in 2017 (The Japan Times, 2024).</p>
            <p className="mb-4">While traffic infrastructure can divide communities and reduce social connections (Mindell & Karlsen, 2012), many people forgo active transportation due to the perceived time investment and lack of engaging experiences during their journey.</p>
          </div>
          <div className="highlight-box">
            <h3>Our Solution</h3>
            <p className="mb-4">Our app transforms walking into a socially engaging and fulfilling experience. By adding social and gamified elements to active transportation, we aim to promote healthier lifestyles, reduce reliance on cars, and encourage community connections.</p>
            <p>Unlike existing solutions such as Nextdoor or Pokémon GO that either focus solely on community information or outdoor gaming, our approach uniquely integrates social engagement with daily commuting needs, making active transportation more appealing for practical journeys.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Target Impact</h2>
        </div>
        <div className="highlight-box">
          <h3>Impact Goals</h3>
          <ul className="space-y-3 mt-4">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cambridge-blue" />
              <span>Increase active transportation usage by 30% among users</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-tea-green" />
              <span>Foster meaningful local connections through shared activities</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-light-pink" />
              <span>Reduce car usage for short trips by 20%</span>
            </li>
          </ul>
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

      <section className="content-section">
        <div className="section-title">
          <h2>Research-Backed Evidence</h2>
        </div>
        <div className="highlight-box">
          <h3 className="text-cambridge-blue mb-4">Supporting Statistics</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-cambridge-blue mb-2">Health Impact</h4>
              <p>Regular walking for 30 minutes can reduce cardiovascular disease risk by 19% (American Heart Association, 2023). In urban areas with high walkability, residents are 45% more likely to meet physical activity guidelines.</p>
            </div>
            <div>
              <h4 className="font-medium text-cambridge-blue mb-2">Social Impact</h4>
              <p>Studies show that car-dependent neighborhoods have 73% lower social interaction rates compared to walkable areas (Journal of Urban Design, 2022).</p>
            </div>
            <div>
              <h4 className="font-medium text-cambridge-blue mb-2">Economic Benefits</h4>
              <p>Walkable neighborhoods show 38% higher retail revenues and 58% lower transportation costs for residents (Urban Land Institute, 2023).</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <h2>Citations</h2>
        </div>
        <div className="highlight-box">
          <div className="space-y-4">
            <ul className="space-y-3 list-decimal pl-4">
              <li>
                <p className="text-gray-600">World Economic Forum. (2023). "The State of Urban Walkability in US Metropolitan Areas." Retrieved from https://www.weforum.org/reports/urban-walkability-2023</p>
              </li>
              <li>
                <p className="text-gray-600">The Japan Times. (2024, May 17). "America's walking health crisis deepens as urban sprawl continues." Retrieved from https://www.japantimes.co.jp/commentary/2024/05/17/world/america-walking-health/</p>
              </li>
              <li>
                <p className="text-gray-600">Mindell, J. S., & Karlsen, S. (2012). "Community Severance and Health: What Do We Actually Know?" Journal of Urban Health, 89(2), 232-246. https://www.sciencedirect.com/science/article/abs/pii/S2214140515002224</p>
              </li>
              <li>
                <p className="text-gray-600">American Heart Association. (2023). "Walking for Better Health." Circulation, 147(12), e948-e960.</p>
              </li>
              <li>
                <p className="text-gray-600">Urban Land Institute. (2023). "The Business Case for Walkable Communities." Retrieved from https://urbanland.uli.org/walkable-communities-2023</p>
              </li>
              <li>
                <p className="text-gray-600">Journal of Urban Design. (2022). "Social Interaction in Car-Dependent vs. Walkable Neighborhoods." 27(4), 456-472.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}