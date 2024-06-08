import Image from "next/image";
import * as S from "./Header.style";
import Link from "next/link";
import { icons } from "@/_shared";

const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <Link href="/">
          <Image src={icons.Logo} alt="로고" width={140} height={60} />
        </Link>
      </S.Container>
    </S.Header>
  );
};

export default Header;
