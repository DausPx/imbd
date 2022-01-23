import {NavigatorScreenParams} from '@react-navigation/native';

type TabsStackParams = {
  Movies: undefined;
  TVShows: undefined;
};

type RootStackParams = {
  Home: NavigatorScreenParams<TabsStackParams>;
  Movie: {item: Movie};
  Show: {item: Show};
};

type Movie = {
  id: string;
  rank: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  imDbRatingCount: string;
};

type Show = {
  id: string;
  rank: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  imDbRatingCount: string;
};
