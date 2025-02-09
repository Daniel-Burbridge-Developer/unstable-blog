import { utapi } from '@/server/uploadthing';

const Home = async () => {
  const files = await utapi.listFiles();
  console.log(files);

  return (
    <div>
      <h1>FILES:</h1>
    </div>
  );
};

export default Home;
