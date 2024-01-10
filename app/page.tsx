import Back from "@/components/Background/Back";
import Items from "@/components/content/Items";
import NowPlaying from "@/components/content/NowPlaying";
import Title from "@/components/title/Title";

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