import { type FC } from "react";
import { Container } from "./Container";
import { Header } from "./Header";
import { VerticalContainer } from "./VerticalContainer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <VerticalContainer>
    <Header />

    <Container>
      <main>{children}</main>
    </Container>
  </VerticalContainer>
);
