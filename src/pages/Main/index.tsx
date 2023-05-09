import { FunctionComponent, useEffect } from "react";

import FooterSecondary from "@components/Footer/FooterSecondary";
import InTheaterBlock from "@components/pagesSections/Main/InTheaterBlock";
import TrailerBlock from "@components/pagesSections/Main/TrailerBlock";
import { moviesImdbNew } from "@constants/movies";
import { useAppSelector } from "@hooks/useAppSelector";
// import { useActions } from "@hooks/useActionts";
import { isMoviesLoadingSelector } from "@store/slices/movieSlice/selectors";

import { MainWrapper } from "./styles";

const Main: FunctionComponent = () => {
  // const { getMoviesThunk } = useActions();
  const isMoviesLoading = useAppSelector(isMoviesLoadingSelector);
  // const movies = useAppSelector(moviesSelector);

  useEffect(() => {
    // getMoviesThunk();
  }, []);
  return (
    <MainWrapper>
      <TrailerBlock movie={moviesImdbNew[1]} isLoading={isMoviesLoading} />
      <InTheaterBlock data={moviesImdbNew} isLoading={isMoviesLoading} />
      <FooterSecondary />
    </MainWrapper>
  );
};

export default Main;
