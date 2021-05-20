import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, setSongs, libraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            song={song}
            key={song.id}
            setCurrentSong={setCurrentSong}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
