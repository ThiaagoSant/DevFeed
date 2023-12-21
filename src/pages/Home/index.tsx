import HomeView from "./HomeView";

import { useHomeModel } from "./HomeModel";

const Home = () => {
  const homeModel = useHomeModel();

  return <HomeView {...homeModel} />;
};

export default Home;
