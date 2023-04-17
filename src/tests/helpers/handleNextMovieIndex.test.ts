import { handleNextMovieIndex } from "../../pages/Movie/config/handleNextMovieIndex";

const mockData = [
  {
    id: "tt6718170",
    title: "The Super Mario Bros. Movie",
    fullTitle: "The Super Mario Bros. Movie (2023)",
    year: "2023",
    releaseState: "05 Apr 2023",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_Ratio0.6699_AL_.jpg",
    runtimeMins: "92",
    runtimeStr: "92 mins",
    plot: "The story of The Super Mario Bros. on their journey through the Mushroom Kingdom.",
    contentRating: "PG",
    imDbRating: "7.4",
    imDbRatingCount: "37027",
    metacriticRating: "46",
    genres: "Animation, Adventure, Comedy",
    directors: "Aaron Horvath, Michael Jelenic, Pierre Leduc, Fabien Polack",
    stars: "Chris Pratt, Anya Taylor-Joy, Charlie Day, Jack Black",
  },
  {
    id: "tt2906216",
    title: "Dungeons & Dragons: Honor Among Thieves",
    fullTitle: "Dungeons & Dragons: Honor Among Thieves (2023)",
    year: "2023",
    releaseState: "31 Mar 2023",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjAyMGMwYTEtNDk4ZS00YmY0LThhZjUtOWI4ZjFmZmU4N2I3XkEyXkFqcGdeQXVyMTEyNzQ1MTk0._V1_Ratio0.6794_AL_.jpg",
    runtimeMins: "134",
    runtimeStr: "134 mins",
    plot: "A charming thief and a band of unlikely adventurers embark on an epic quest to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
    contentRating: "PG-13",
    imDbRating: "7.6",
    imDbRatingCount: "35617",
    metacriticRating: "72",
    genres: "Action, Adventure, Comedy",
    directors: "John Francis Daley, Jonathan Goldstein",
    stars: "Chris Pine, Michelle Rodriguez, Regé-Jean Page, Justice Smith",
  },
];

const mockFirstId = mockData[0].id;
const mockSecondId = mockData[1].id;

describe("should return the next movie if exists", () => {
  it("should return mock second item id", () => {
    const nextItem = handleNextMovieIndex(mockData, mockFirstId);
    expect(nextItem.id).toBe(mockSecondId);
  });
  it("should return mock first item id", () => {
    const nextItem = handleNextMovieIndex(mockData, mockSecondId);
    expect(nextItem.id).toBe(mockFirstId);
  });
});
