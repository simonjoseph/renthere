import CardImage from "../../components/CardImage";
import Head from "next/head";

import Navbar from "../../components/Navbar";
import Space from "../../components/Space";
import Footer from "../../components/Footer";
// import InfoCard from "../../components/InfoCard";



function propertyDetails({searchResults}) {

  return (
    <div>
      <Head>
        <title>Aluga Aqui</title>
        <link rel="icon" href="/img/alugaqui.ico" />
      </Head>
        <div className="">
        {searchResults.map(({id, titlo, Provincia, Bairro, Rua, Casa,
              Telefone, Modalidade, Valor, Quarto, Sala, Banheiro, Area,
              defaul, Foto}) => (
                <Navbar
                key={id}
                id = {id}
                titlo={titlo}
                Provincia={ Provincia }
                Bairro={ Bairro }
                Rua={Rua}
                Casa={Casa}
                Telefone={ Telefone }
                Modalidade={ Modalidade }
                Valor={ Valor }
                Quarto={ Quarto }
                Sala={ Sala }
                Banheiro={Banheiro }
                Area={ Area }
                defaul={defaul}
                Foto={Foto}
            />
          ))}
          
        <section className="  pt-14 px-6 mt-8">
          
        {/* <div className="">
            {searchResults.map(({id, titlo, Provincia, Bairro, Rua, Casa,
              Telefone, Modalidade, Valor, Quarto, Sala, Banheiro, Area,
              defaul, Foto}) => (
                <CardImage
                key={id}
                id = {id}
                titlo={titlo}
                Provincia={ Provincia }
                Bairro={ Bairro }
                Rua={Rua}
                Casa={Casa}
                Telefone={ Telefone }
                Modalidade={ Modalidade }
                Valor={ Valor }
                Quarto={ Quarto }
                Sala={ Sala }
                Banheiro={Banheiro }
                Area={ Area }
                defaul={defaul}
                Foto={Foto}
            />
          ))}
          </div> */}

        <div className="">
            {searchResults.map(({id, titlo, Provincia, Bairro, Rua, Casa,
              Telefone, Modalidade, Valor, Quarto, Sala, Banheiro, Area,
              defaul, Foto}) => (
                <Space
                key={id}
                id = {id}
                titlo={titlo}
                Provincia={ Provincia }
                Bairro={ Bairro }
                Rua={Rua}
                Casa={Casa}
                Telefone={ Telefone }
                Modalidade={ Modalidade }
                Valor={ Valor }
                Quarto={ Quarto }
                Sala={ Sala }
                Banheiro={Banheiro }
                Area={ Area }
                defaul={defaul}
                Foto={Foto}
            />
          ))}
          </div>

        </section>
        <Footer />
        </div>

    </div>
  )
}

export default propertyDetails;

export async function getServerSideProps({ params: {id} }){
  const searchResults = await (fetch(`http://localhost:3331/Imoveis?id=${id}`))
  .then(
    (res) => res.json()
    );

    return {
      props: {
        searchResults
      }
    }
}
