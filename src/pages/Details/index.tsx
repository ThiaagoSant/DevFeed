import DetailsView from "./DetailsView";

import { useDetailsModel } from "./DetailsModel";

const Details = () => {
  const detailsModel = useDetailsModel();

  return <DetailsView {...detailsModel} />;
};

export default Details;
