import styled from "styled-components";

const Icon = (props) => {
  if (props.link) {
    return (
      <IconLinkWrapper
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </IconLinkWrapper>
    );
  }
  return <IconWrapper>{props.children}</IconWrapper>;
};

const IconWrapper = styled.div`
  display: flex;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const IconLinkWrapper = styled.a`
  display: flex;
  border-radius: 4px;
  background-color: #01f9c6;
  margin-right: 16px;
  justify-content: center;
  align-items: center;
  padding: 8px;
  color: inherit;

  &:hover {
    scale: 1.2;
  }
`;

export default Icon;
