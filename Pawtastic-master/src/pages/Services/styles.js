import styled from "styled-components";

export const PageWrapper = styled.section`
  &,
  & * {
    box-sizing: border-box;
    display: inline-flex;
    text-align: center;
  }

  hr {
    // display: inline-flex;
    border: none;
    border-top: 1px solid lightgrey;

    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  font-size: 1rem;
  line-height: 2rem;
  max-width: 40em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
  padding: 1rem 2rem 1rem 1rem;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

export const Width = styled.section`
  &,
  & * {
    text-box: 500px;
  }
`;
