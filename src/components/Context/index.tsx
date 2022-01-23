import React, {useState} from 'react';
import {Movie, Show} from '../../types/types';

type ContextProps = {
  children: React.ReactNode;
};
type AppContextInterface = {
  topMovies?: Movie[];
  topShows?: Show[];
  setTopMovies: (movies: Movie[]) => void;
  setTopShows: (shows: Show[]) => void;
};

export const AppContext = React.createContext<AppContextInterface>({
  setTopMovies: () => {},
  setTopShows: () => {},
});

const Context = (props: ContextProps) => {
  const {children} = props;
  const [topMovies, setTopMovies] = useState<Movie[] | undefined>(undefined);
  const [topShows, setTopShows] = useState<Show[] | undefined>(undefined);

  return (
    <AppContext.Provider
      value={{topMovies, topShows, setTopMovies, setTopShows}}>
      {children}
    </AppContext.Provider>
  );
};

export default Context;
