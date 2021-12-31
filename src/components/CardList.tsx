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
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [currentImgUrl, setCurrentImgUrl] = useState('');

  function handleOpenModal(url: string): void {
    setCurrentImgUrl(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={3} spacing="40px">
        {cards.map(card => (
          // eslint-disable-next-line react/jsx-no-bind
          <Card key={card.id} data={card} viewImage={handleOpenModal} />
        ))}
      </SimpleGrid>
      <ModalViewImage
        imgUrl={currentImgUrl}
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
}
