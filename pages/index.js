import { useEffect, useState } from 'react';

const Home = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    // Step 2: Retrieve the access token from session storage
    const access_token = sessionStorage.getItem('access_token');

    const fetchPlaylists = async () => {
      try {
        // Step 3: Fetch playlists from Spotify API
        const response = await fetch('https://api.spotify.com/v1/me/playlists', {
          headers: {
            Authorization: `Bearer ${access_token}`, // Step 2 (Continued): Replace 'YOUR_ACCESS_TOKEN'
          },
        });

        if (response.ok) {
          const data = await response.json();
          setPlaylists(data.items); // Update playlists state
        } else {
          console.error('Failed to fetch playlists:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {playlists.map((playlist) => (
        <div key={playlist.id}>
          <h2>{playlist.name}</h2>
          {/* Add any additional information or components related to each playlist */}
        </div>
      ))}
    </div>
  );
};

export default Home;
