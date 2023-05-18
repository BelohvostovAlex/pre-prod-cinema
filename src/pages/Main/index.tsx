import { FunctionComponent, useEffect } from "react";

import FooterSecondary from "@components/Footer/FooterSecondary";
import { useActions } from "@hooks/useActionts";
import { useAppSelector } from "@hooks/useAppSelector";
import InTheaterBlock from "@sections/Main/InTheaterBlock";
import TrailerBlock from "@sections/Main/TrailerBlock";
import {
  isMoviesLoadingSelector,
  moviesSelector,
} from "@store/slices/movieSlice/selectors";

import { MainWrapper } from "./styles";

const Main: FunctionComponent = () => {
  const { getMoviesThunk } = useActions();
  const isMoviesLoading = useAppSelector(isMoviesLoadingSelector);
  const movies = useAppSelector(moviesSelector);

  useEffect(() => {
    getMoviesThunk();
  }, []);
  return (
    <MainWrapper>
      <TrailerBlock movie={movies[1]} isLoading={isMoviesLoading} />
      <InTheaterBlock data={movies} isLoading={isMoviesLoading} />
      <FooterSecondary />
    </MainWrapper>
  );
};

export default Main;
