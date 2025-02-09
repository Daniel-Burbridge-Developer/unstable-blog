import { utapi } from '@/server/uploadthing';

const Home = async () => {
  const files = await utapi.listFiles();
  const BASEURL = 'https://m5vq5hwl5l.ufs.sh/f/';

  return (
    <div className="text-white">
      <h1>FILES:</h1>
      <br />
      <ul className="flex gap-4 flex-col">
        {files.files.map((file) => (
          <li key={file.key}>{`${BASEURL}${file.key}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
