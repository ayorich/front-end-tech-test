import Text from '@component/atoms/text';
import Hero from '@component/organisms/hero';
import NavBar from '@component/organisms/navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div>
        <NavBar />
        <Hero />
      </div>
    </div>
  );
}
