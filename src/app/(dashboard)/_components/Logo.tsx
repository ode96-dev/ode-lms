import Image from "next/image";
import React from "react";

type Props = {
  logoText: string;
};

const Logo = (props: Props) => {
  return (
    <>
      <Image src="/logo.svg" height={80} width={80} alt={props.logoText} />
    </>
  );
};

export default Logo;
