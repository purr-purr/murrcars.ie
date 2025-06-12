import Filter from '@modules/common/components/Filter';
import Meta from '@modules/common/components/Meta';
import Feedback from '@modules/feedback/components/Feedback';
import HomeAdvantages from '@modules/pages/home/components/HomeAdvantages';
import HomeIntro from '@modules/pages/home/components/HomeIntro';

import HomeReviews from '@modules/pages/home/components/HomeReviews';

import HomeWhoWeAre from '@modules/pages/home/components/HomeWhoWeAre';


const Home = () => {

	return (
		<>
			<Meta title="Home"/>
			<HomeIntro/>
			<Filter/>
			<HomeWhoWeAre/>
			<HomeAdvantages/>
			<Feedback type="cooperation"/>
			<HomeReviews/>
			<Feedback type="owner"/>
		</>
	);
};

export default Home;
