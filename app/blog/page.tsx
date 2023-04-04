import Post from '../../components/Post';

export default async function Page() {
  return (
    <>
      <h1 className="mx-auto text-center pt-20 md:max-w-screen-lg">Blog</h1>
      <Post
        title={'restart of the blog'}
        date={'04/04/2023'}
        interests={['human attention', 'western philosophy']}
        achievement="blogged today!"
        reading="A History of Western Philosophy"
        readingPercentage={8}
        watching="Narcos"
      >
        <p>
          I&apos;ve finally decided to restart my blog. It took me about
          (actually exactly) 4 months to realize that a CMS doesn&apos;t really
          incentive creative blogging, or blogging in general
        </p>
        <p>
          So we&apos;re going to ditch that and just do it the old fashion way.
        </p>
        <p>
          It is not without many difficulties, but I would rather have a garbage
          blog than no blogs at all
        </p>

        <p>
          I&apos;m also beginning another journey along with this. I am reminded
          of the process Leo Tolstoy went through when he wrote War and Peace.
          While reading The Goldfinch, I found that I liked the way Donna Tart
          wrote, and approached this idea of absurdism. Well, I have to then
          read Camus. To get a sense of his ideas, I wanted to first read the
          Myth of Sisyphus. I then realized that I didn&apos;t really understand
          any anectdotes or references made to history, theory, and the like. So
          like usual, I was enlightened by Reddit to Bertrand Russell&apos;s A
          History of Western Philosophy. I only knew of Russell from the idea of
          {' "'}set of all sets that do not contain themselves{'" '}.
          Coincidentally, this line of reading lead me to what I was originally
          searching for years ago, the ability to escape college philosophy
          courses while getting a general sense of what the fuck is going on in
          this world.
        </p>

        <p>
          It{"'"}s getting incredibly late. I have some video ideas for the NYC
          footage (fairly lackluster). I{"'"}ll report back tomorrow
        </p>
      </Post>

      <Post
        title={'start of the blog'}
        date={'01/04/2023'}
        interests={['astrophotography']}
        achievement="starting blog"
      >
        <p>
          I'm so mad actually. This entire post just got deleted.... retyping at
          3 am in the morning I was actually able to finish this blog in a
          couple of hours with Next.js and GraphQL hosted by Hygraph (I was
          going to praise Hygraph but mf glitched out on me so). It was fun
          manipulating data and displaying it in a pleasing way. Hopefully now
          this will make me actually keep blogging (journalling) Now you might
          ask, why would you make your jounral public... Well, it's just not as
          fun when it's not public. The real reason lies somewhere around the
          need for validation. Even though I know validation will never be
          satisfying enough, I still crave it, in a completely unhealthy way.
        </p>
        <p>
          So now I will validate myself on one thing I did yesterday that I
          really wanted validation for (and didn't really get any). Me and Casey
          tried to play around with the James Webb Telescope data since most
          data are just public. We ended up with the final goal of wanting to
          recreate the NASA images. This turned out to be a difficult task and
          we ran into a couple of issues. 1. where is the data Casey found the
          MAST database that contained all the goodies. 2. how to find the right
          data This took a while as I had to filter by the correct queries, most
          importantly searching by mission (JWST), target (NGC 3324), and
          instrument (NIRCam). This resulted in all the data related to the JWST
          mission targeting the NGC 3324 cluster using the near infared camera.
          3. how to parse the data Casey spent two hours trying to write a
          parser by hand. I spent two minutes. The first one went to installing
          astropy. The second was on reading the API. 4. how to use the data We
          used matplotlib to display and save images using the functions
          imshow/imsave. 5. how to composite image Using the saved images, I
          picked arbitrary exposures (w/ different filters) and assigned proper
          R G B channels to them using Photoshop. Additional steps like aligning
          were also done with photoshop as well. Finally, some processing had to
          be done like hue shifting and color correction but I was able to get a
          final image. Here is the image.
        </p>
      </Post>
    </>
  );
}
