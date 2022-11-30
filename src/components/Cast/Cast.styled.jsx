import styled from '@emotion/styled';

export const CastSection = styled.section``;

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const ActorInfo = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActorPhoto = styled.img`
  margin-bottom: 5px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const ActorName = styled.p`
  font-weight: bold;
  font-size: 10px;
  margin-bottom: 5px;
`;

export const Сharacter = styled.p`
  font-size: 10px;
`;
