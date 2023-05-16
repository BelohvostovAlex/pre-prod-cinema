import { FunctionComponent, useEffect } from "react";

import TrailerBlock from "../../sections/Main/TrailerBlock";
import InTheaterBlock from "../../sections/Main/InTheaterBlock";
import FooterSecondary from "../../components/Footer/FooterSecondary";
import { useAppSelector } from "../../hooks/useAppSelector";
// import { useActions } from "../../hooks/useActionts";
import { isMoviesLoadingSelector } from "../../store/slices/movieSlice/selectors";
import { moviesImdbNew } from "../../constants/movies";

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
