import Text from '@component/atoms/text';
import CreonPass from '@component/organisms/creonPass';
import Hero from '@component/organisms/hero';
import NavBar from '@component/organisms/navbar';
import Profiting from '@component/organisms/profiting';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div>
        <NavBar />
        <Hero />
        <CreonPass />
        <Profiting />
      </div>
    </div>
  );
}
