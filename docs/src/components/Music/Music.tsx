import "./Music.css";

function Music() {
  return (
    <div>
      <h1>Music</h1>
      <div className="musicBody">
        <p>
          At the beginning of each year, I like to build out a new go-to
          playlist for work/study/focus/etc. I add to it as the year goes on.
          Here's this years playlist:
        </p>
        <iframe
          src="https://open.spotify.com/embed/playlist/2Rxxw4a6gTSC5HiuV5qwnY?utm_source=generator"
          width="100%"
          height="352"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <p>
          You'll find a little bit of everything here: electronic ambient,
          soundtrack, drone, instrumental math rock, lofi, even a little hip hop
          and house.
        </p>
        <p>Give it a whirl - you might find some gems in there :)</p>
      </div>
    </div>
  );
}

export default Music;
