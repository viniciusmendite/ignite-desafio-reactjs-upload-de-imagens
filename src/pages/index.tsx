import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    async ({ pageParam = null }) => {
      const response = await api.get('api/images', {
        params: { after: pageParam },
      });

      return response.data;
    },
    {
      getNextPageParam: (lastPage, pages) => {
        const { after } = lastPage;

        if (after) {
          return after;
        }

        return null;
      },
    }
  );

  const formattedData = useMemo(() => {
    if (data) {
      const newMap = data.pages.map(item => item.data);
      return newMap.flat();
    }
    return null;
  }, [data]);

  console.log(formattedData);

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}
      </Box>
    </>
  );
}
