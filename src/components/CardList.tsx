import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  // console.log(cards);

  return (
    <>
      <SimpleGrid minChildWidth="293px" gap="10">
        {cards.map(item => (
          <Card key={item.id} data={item} />
        ))}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
    </>
  );
}
