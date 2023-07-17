const getToken = async (authorizationCode) => {
    const clientId = 'df96d5158622417daf9495881e878fe9'; // Replace with your Spotify Client ID
    const clientSecret = 'f5f7cdd6ef434c4987d317120ae375aa'; // Replace with your Spotify Client Secret
    const redirectUri = 'http://localhost:3000/callback'; // Replace with your redirect URI
  
    const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  
    const data = new URLSearchParams();
    data.append('grant_type', 'authorization_code');
    data.append('code', authorizationCode);
    data.append('redirect_uri', redirectUri);
  
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch access token');
    }
  
    const json = await response.json();
    return json.access_token;
  };
  
  export default getToken;
  