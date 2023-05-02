import Blog from '../components/Blog';
import Personal from '../components/Personal';
import Portfolio from '../components/Portfolio';

export default function Home() {
  return (
    <div className="bg-white text-black tracking-wide">
      <div className="grid grid-cols-3 gap-4 my-8">
        <div className="p-4 px-10">
          <div className="uppercase text-xl tracking-widest">About</div>
          <Personal />
        </div>
        <div className="p-4">
          <div className="uppercase text-xl tracking-widest">PORTFOLIO</div>
          <Portfolio />
        </div>
        <div className="p-4">
          <p className="uppercase text-xl tracking-widest">Blog</p>
          <Blog />
        </div>
      </div>
    </div>
  );
}
