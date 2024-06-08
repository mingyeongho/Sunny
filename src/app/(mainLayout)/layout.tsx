import { Header } from "@/_widgets";
import { Main, MainWrapper } from "./main.style";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Main>{children}</Main>
      </MainWrapper>
    </>
  );
};

export default MainLayout;
