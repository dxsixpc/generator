import { css } from '@emotion/react';
import { dragging, dragOverlay, ItemWrapper } from './Styled';

export interface ItemProps {
  value: any;
  isDragging?: boolean;
  isDragOverlay?: boolean;
}

const Item: React.FC<ItemProps> = (props) => {
  const { value, isDragging, isDragOverlay } = props;

  return (
    <ItemWrapper
      css={css`
        ${isDragging && dragging}
        ${isDragOverlay && dragOverlay}
      `}
    >
      {value}
    </ItemWrapper>
  );
};

export default Item;
