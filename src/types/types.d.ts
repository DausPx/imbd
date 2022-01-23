import {NavigatorScreenParams} from '@react-navigation/native';

type TabsStackParams = {
  Movies: undefined;
  TVShows: undefined;
};

type RootStackParams = {
  Home: NavigatorScreenParams<TabsStackParams>;
  Movie: undefined;
  Show: undefined;
};
