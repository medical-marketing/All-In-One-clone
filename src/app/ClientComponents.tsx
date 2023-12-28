"use client";
import styled from "styled-components";

export const ClientSideStyledBody = styled.div<{ $strongColor?: string }>`
  strong {
    color: ${(props) => props.$strongColor || "#000000"};
  }
`;
