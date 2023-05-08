import Blog from '../components/Blog';
import Personal from '../components/Personal';
import Portfolio from '../components/Portfolio';

export default function Home() {
  return (
    <div className="bg-white text-black tracking-wide">
      <div className="grid grid-cols-3 gap-4 my-8">
        <div className="px-8">
          <div className="uppercase text-xl tracking-widest mb-4">About</div>
          <Personal />
        </div>
        <div className="px-8">
          <div className="uppercase text-xl tracking-widest mb-4">PORTFOLIO</div>
          <Portfolio />
        </div>
        <div className="px-8">
          <p className="uppercase text-xl tracking-widest mb-4">Blog</p>
          <Blog />
        </div>
      </div>
    </div>
  );
}
