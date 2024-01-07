import Back from "./components/Background/Back";
import Items from "./components/Items";
import NowPlaying from "./components/NowPlaying";
import Title from "./components/Title";

const Page= () => {

  return (
      <>
      <Title/>
      <Items/>
      <NowPlaying/>
      <Back/>
      </>
  );
};

export default Page;