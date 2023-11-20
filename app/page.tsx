import Blog from '@component/organisms/blog';
import ComingSoon from '@component/organisms/comingSoon';
import CreonPass from '@component/organisms/creonPass';
import Hero from '@component/organisms/hero';
import NavBar from '@component/organisms/navbar';
import OurMission from '@component/organisms/ourMission';
import Profiting from '@component/organisms/profiting';

export default function Home() {
  return (
    <div>
      <div>
        <NavBar />
        <Hero />
        <CreonPass />
        <Profiting />
        <OurMission />
        <ComingSoon />
        <Blog />
      </div>
    </div>
  );
}
