import styled from 'styled-components';

export const AppWrapper = styled.div`
font-size: 25px;

.article {
  color: green;
}

li {
  text-decoration: underline;

  &.active {
    color: brown;
  }

  &:hover {
    background-color: snow;
  }

  &::after {
    content: "_";
  }
}
`;

export const TitleWrapper = styled.h2`
  color: teal;
`;