import { css } from '@emotion/react';
import { dragging, dragOverlay, ItemWrapper } from './Styled';

export interface ItemProps {
  value: any;
  isDragging?: boolean;
  isDragOverlay?: boolean;
  height?: number;
}

const Item: React.FC<ItemProps> = (props) => {
  const { value, isDragging, isDragOverlay, height } = props;

  return (
    <ItemWrapper
      css={css`
        ${isDragging && dragging}
        ${isDragOverlay && dragOverlay}
      `}
      style={{ height: height ? `${height}px` : '' }}
    >
      {value}
    </ItemWrapper>
  );
};

export default Item;
