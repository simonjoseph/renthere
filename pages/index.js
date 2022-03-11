import Head from "next/head";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import Nav from "../components/Nav";
import { cardData } from "../data/CardsData";
import Image from "next/image";

export default function Home({ exploreData }) {
  let poc;
  return (
    <div className="">
      <Head>
        <title>Aluga Aqui</title>
        <link rel="icon" href="/img/logo.ico" />
      </Head>

      {/* <Header /> */}
      <Nav />
      <Banner />

      <main className=" max-w-7xl mx-auto">
        <section className="pt-6 pb-12">
          <h2
            className="text-4xl font-semibold pb-5 
          text-center text-[#292929]"
          >
            Explore as melhores cidades de Angola
          </h2>
          <p
            className="text-2xl font-medium pb-5 
          text-center text-[#292929]"
          >
            Vê o que elas têm para oferecer e alugue o espaço perfeito para si
          </p>

          <div className="flex space-x-3 overflow-scroll p-3 -ml-3 scrollbar-hide">
            {cardData?.map((item, index) => (
              <MediumCard
                key={index}
                img={item.image}
                title={item.title}
                link={item.link}
              />
            ))}
          </div>
        </section>

        <section className="pt-12 pb-12">
          <h2
            className="text-4xl font-semibold pb-5 
          text-center text-[#292929]"
          >
            Lugares aguardando por si
          </h2>
          <p
            className="text-2xl font-medium pb-5 
          text-center text-[#292929]"
          >
            Venha até nós e acomode-se da melhor maneira
          </p>

        <div className="flex space-x-3 overflow-scroll p-3 -ml-3 scrollbar-hide">
          {exploreData?.map((item, index) => (
            <Card key={index}
              dados={item}>

              {/* {item.Foto.map((num, index) => (
                <div key={index}>
                  <p>{num.pic}</p>
                  <Image src={"/img/" + num.pic} width="100px" height="100px" />
                </div>
              ))} */}

            </Card>
          ))}
        </div>
        </section>


        <LargeCard
          img="/img/Fortaleza_Kibala.jpg"
          title="Encontre os melhores sitio pra passar as férias"
          description="Venha descobrir o que Angola tem de melhor para oferecer"
          buttonText="Buscar"
        />

        <section className="pt-12 pb-12">
          <h2
            className="text-4xl font-semibold pb-5 
          text-center text-[#292929]"
          >
            Desfrute do seu turismo
          </h2>
          <p
            className="text-2xl font-medium pb-5 
          text-center text-[#292929]"
          >
            Hospeda-se nos melhores hoteis que temos para si e visite outros
            mais...
          </p>

          <div className="flex space-x-3 overflow-scroll p-3 -ml-3 scrollbar-hide">
            {cardData?.map((item, index) => (
              <MediumCard
                key={index}
                img={item.image}
                title={item.title}
                link={item.link}
              />
            ))}
          </div>
        </section>

        <LargeCard
          img="/img/gothome.jpg"
          title="Com o Aluga aqui o teu sonho se torna realidade"
          description="Encontre o melhor lugar para morar com a tua familia"
          buttonText="Buscar"
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("http://localhost:3331/Imoveis").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
}
