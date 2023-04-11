import { FunctionComponent, useEffect, useState } from "react";

import { getMovies } from "../../api/imdb/getMovies";
import TrailerBlock from "../../components/pagesSections/Main/TrailerBlock";
import InTheaterBlock from "../../components/pagesSections/Main/InTheaterBlock";
import { IMovie } from "../../models/movie/IMovie";

import { MainWrapper } from "./styles";

const Main: FunctionComponent = () => {
  const [movies, setMovies] = useState<IMovie[]>([] as IMovie[]);

  // const handleMovies = async () => {
  //   const data = await getMovies();
  //   setMovies(data);
  // };

  const getInTheaters = async () => {
    const data = await getMovies();
    console.log(data);
    setMovies(data);
  };

  useEffect(() => {
    getInTheaters();
  }, []);
  return (
    <MainWrapper>
      <TrailerBlock
        title={movies[0]?.title}
        text={movies[0]?.description}
        img={movies[0]?.image}
      />
      <InTheaterBlock
        text={movies[1]?.description}
        title={movies[1]?.title}
        img={movies[1]?.image}
        data={movies}
        genres={movies[1]?.genre}
      />
    </MainWrapper>
  );
};

export default Main;
