import { useRouter } from 'next/router';
import { useEffect } from 'react';
import getToken from '../utils/getToken';


const Callback = () => {
  const router = useRouter();

  useEffect(() => {
    const fetchToken = async () => {
      const code = router.query.code;

      try {
        const accessToken = await getToken(code);
        console.log('Access Token:', accessToken);
      } catch (error) {
        console.error('Error fetching access token:', error);
      }

      router.push('/'); // Redirect to the home page after successful authentication
    };

    fetchToken();
  }, []);

  return <div>Logging in...</div>;
};

export default Callback;
