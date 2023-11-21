import Blog from '@component/organisms/blog';
import ComingSoon from '@component/organisms/comingSoon';
import CreonPass from '@component/organisms/creonPass';
import Footer from '@component/organisms/footer';
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
        <div className="flex flex-col">
          <CreonPass className="order-4 md:order-4 lg:order-4 3xl:order-1" />
          <Profiting className="order-2 md:order-2 lg:order-2 3xl:order-2" />
          <OurMission className="order-1 md:order-1 lg:order-1 3xl:order-3" />
          <ComingSoon className="order-5 md:order-5 lg:order-5 3xl:order-4" />
          <Blog className="order-3 md:order-3 lg:order-3 3xl:order-5" />
        </div>
        <Footer />
      </div>
    </div>
  );
}
