import { Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ButtonPrimary } from "../components/buttons/ButtonPrimary";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Connect - Login</title>
      </Head>

      <Heading>Seja bem vindo</Heading>
      <ButtonPrimary w={"md"} onClick={() => router.push("/plans")}>
        Planos
      </ButtonPrimary>
    </>
  );
};

export default Home;
