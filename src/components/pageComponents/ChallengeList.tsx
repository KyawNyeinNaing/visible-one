import React from "react";
import { Post } from "../../types/post";
import { Text } from "@radix-ui/themes";
import styled, { css } from "styled-components";
import { Fade } from "react-awesome-reveal";

interface Props {
  postData: Post[];
}

const ListStyled = styled.div<{ active: boolean }>`
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  background: #ffffff;
  min-height: 70px;
  transition: background 0.3s ease;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      background: transparent linear-gradient(90deg, #2dc4ea 0%, #3ae7ab 100%)
        0% 0% no-repeat padding-box;
      & > * {
        &:first-child {
          color: #09a8d0;
        }
        &:last-child {
          color: #ffffff;
        }
      }
    `}
  &:hover {
    background: transparent linear-gradient(90deg, #2dc4ea 0%, #3ae7ab 100%) 0%
      0% no-repeat padding-box;
    & > * {
      &:first-child {
        color: #09a8d0;
      }
      &:last-child {
        color: #ffffff;
      }
    }
  }
`;

const ChallengeList = ({ postData }: Props) => {
  const numbers = Array.from(
    { length: postData?.slice(0, 5)?.length },
    (_, index) => (index + 1).toString().padStart(2, "0")
  );

  return (
    <>
      {postData?.slice(0, 5)?.map((each, key) => (
        <ListStyled
          active={key === 0}
          key={key}
          className="bg-gradient-to-r from-primary to-green px-[20px] py-[10px] flex items-center justify-start gap-3 shadow-md"
        >
          <Text className="text-[40px] text-primary">{numbers[key]}</Text>
          <Text className="text-[18px]">{each.title}</Text>
        </ListStyled>
      ))}
    </>
  );
};

export default ChallengeList;
