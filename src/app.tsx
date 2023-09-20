import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import React, { CSSProperties } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useSwipeable } from "react-swipeable";

interface RowProps extends ListChildComponentProps {}

const Row: React.FC<RowProps> = ({ index, style }) => {
  const [isSwipedLeft, setIsSwipedLeft] = React.useState(false);

  const handleSwipeLeft = () => {
    console.log(`Card ${index} deslizado a la izquierda: Borrar`);
    setIsSwipedLeft(true);
  };

  const handleSwipeRight = () => {
    console.log(`Card ${index} deslizado a la derecha: Editar`);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });

  const cardStyle = isSwipedLeft
    ? {
        border: "2px solid red",
        transform: "translateX(-10px)",
      }
    : {};

  const combinedStyle = {
    ...cardStyle,
    transition: "transform 0.3s ease, border 0.3s ease",
    ...style,
  };

  return (
    <div {...handlers} style={style as CSSProperties}>
      <Card style={combinedStyle}>
        <CardContent>
          <Typography variant="h6" component="div">
            Card {index}
          </Typography>
          <IconButton
            onClick={handleSwipeRight}
            color="primary"
            aria-label="edit"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={handleSwipeLeft}
            color="secondary"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </CardContent>
      </Card>
    </div>
  );
};

interface InfiniteListProps {
  items: any[];
}

const InfiniteList: React.FC<InfiniteListProps> = ({ items }) => {
  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={100} // Altura ajustada para la Card
      width="100vw"
    >
      {Row}
    </List>
  );
};

export default InfiniteList;
