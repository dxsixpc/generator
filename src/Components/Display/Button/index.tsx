import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd/lib/button';
import { Wrapper } from './Styled';

export interface ButtonProps extends AntButtonProps {
  buttonText?: string;
  styled?: string;
}

/**
 * @name 按钮
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param buttonText 按钮文本
 * @link 其他参数详见 https://ant.design/components/button-cn/
 */
const Button: React.FC<ButtonProps> = (props) => {
  const { buttonText = '按钮', styled, ...rest } = props;

  return (
    <Wrapper styled={styled}>
      <AntButton {...rest}>{buttonText}</AntButton>
    </Wrapper>
  );
};

export default Button;