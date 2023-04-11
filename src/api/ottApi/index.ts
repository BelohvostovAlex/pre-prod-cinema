import { ottApi } from "../../http/ottApi";
import { OttUrls } from "../../constants/url/ott";

import { GetNewMoviesOTTOutput, OttParams } from "./interfaces";

export const getNewMoviesOTT = async (params: OttParams) => {
  const { data } = await ottApi.get<GetNewMoviesOTTOutput>(
    OttUrls.GET_NEW_MOVIES,
    {
      params,
    },
  );

  return data;
};
