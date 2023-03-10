import { forwardRef } from 'react';
import { Handle, Remove } from '../Item';
import { ActionsWrapper, ButtonWrapper, DivWrapper, HeaderWrapper } from './Styled';

export interface ContainerProps {
  children: React.ReactNode;
  columns?: number;
  label?: string;
  style?: React.CSSProperties;
  horizontal?: boolean;
  hover?: boolean;
  handleProps?: React.HTMLAttributes<any>;
  scrollable?: boolean;
  shadow?: boolean;
  placeholder?: boolean;
  unstyled?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      children,
      columns = 1,
      handleProps,
      horizontal,
      hover,
      onClick,
      onRemove,
      label,
      placeholder,
      style,
      scrollable,
      shadow,
      unstyled,
      ...props
    }: ContainerProps,
    ref,
  ) => {
    const Component = onClick ? ButtonWrapper : DivWrapper;

    const styled = {
      unstyled,
      horizontal,
      hover,
      placeholder,
      scrollable,
      shadow,
    };

    return (
      <Component
        {...props}
        ref={ref as React.RefObject<HTMLButtonElement> & React.RefObject<HTMLDivElement>}
        style={
          {
            ...style,
            '--columns': columns,
          } as React.CSSProperties
        }
        onClick={onClick}
        tabIndex={onClick ? 0 : undefined}
        styled={styled}
      >
        {label ? (
          <HeaderWrapper>
            {label}
            <ActionsWrapper>
              {onRemove ? <Remove onClick={onRemove} /> : undefined}
              <Handle {...handleProps} />
            </ActionsWrapper>
          </HeaderWrapper>
        ) : null}
        {placeholder ? children : <ul>{children}</ul>}
      </Component>
    );
  },
);

Container.displayName = 'Container';

export default Container;
