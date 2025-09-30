import styles from "./style.module.css";

import Image from "next/image";
import Link from "next/link.js";

import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section id="home" className={styles.home}>
        <Image
          src="/IleAse_completo.png"
          alt="Ilê Àse"
          width={799}
          height={750}
          className={styles.home_image}
        />

        <div className={styles.home_textbox}>
          <span className={styles.text_textbox}>
            Uma família espiritual guiada pela ancestralidade, pela força dos
            Òrìṣà e pelo compromisso com o axé. Aqui, tradição e conhecimento se
            encontram para transformar vidas, unir caminhos e fortalecer
            destinos.
          </span>
        </div>

        <nav className={styles.home_nav}>
          <ul className={styles.home_nav_ul}>
            <li className={styles.home_nav_li}>
              <Link href="#about" className={styles.link}>
                Quem Somos
              </Link>
            </li>
            <li className={styles.home_nav_li}>
              <Link href="#terreiro197" className={styles.link}>
                Terreiro 197
              </Link>
            </li>
            <li className={styles.home_nav_li}>
              <Link href="#alagbara" className={styles.link}>
                Àlàgbára
              </Link>
            </li>
            <li className={styles.home_nav_li}>
              <Link
                href="https://wa.me/message/EQFP5IEU2D74L1"
                className={styles.link}
              >
                Agendar Consulta
              </Link>
            </li>
            <li className={styles.home_nav_li}>
              <Link href="#diamond" className={styles.link}>
                Grupo Diamond
              </Link>
            </li>
            <li className={styles.home_nav_li}>
              <Link href="#umbanda" className={styles.link}>
                Umbanda
              </Link>
            </li>
            <li className={styles.home_nav_li}>
              <Link href="#wurashop" className={styles.link}>
                Wurá Shop
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section id="about" className={styles.about}>
        <div className={styles.about_textbox}>
          <h2 className={styles.text_heading2}>Quem somos?</h2>
          <span className={styles.text_textbox}>
            O Ilê Àṣẹ Egbé Jàhári é uma casa de axé dedicada ao culto aos Òrìṣà,
            guiada pela ancestralidade e pelo compromisso com a espiritualidade
            verdadeira. Nosso terreiro é um espaço de acolhimento, estudo,
            prática e devoção, onde cada pessoa encontra a oportunidade de
            caminhar em sintonia com o seu destino e fortalecer sua ligação com
            o sagrado.
            <br />
            <br />
            Sob a liderança de Bàbá Jàhári ti Ològúnèdé, sacerdote de Candomblé,
            o Ilê Àṣẹ Egbé Jàhári se firma como uma comunidade que valoriza a
            tradição, mas também compreende a importância do diálogo com os
            tempos atuais. Aqui, preservamos os rituais ancestrais e
            transmitimos o axé com responsabilidade, dedicação e amor.
          </span>
        </div>

        <div className={styles.about_textbox}>
          <span className={styles.text_textbox}>
            Nossa missão
            <br />
            Manter viva a herança espiritual do Candomblé, ensinando e
            praticando com seriedade os fundamentos do culto aos Òrìṣà,
            promovendo a união, a força coletiva e o respeito à diversidade de
            caminhos que cada pessoa traz em sua jornada.
            <br />
            <br />
            Nossa visão
            <br />
            Ser um terreiro de referência, reconhecido pela seriedade, pela
            organização comunitária e pelo compromisso em formar pessoas
            conscientes de sua espiritualidade e do papel que desempenham dentro
            da tradição.
            <br />
            <br />
            Nossos valores
            <br />
            ✨ Ancestralidade – Respeito e honra a quem veio antes de nós.
            <br />
            ✨ Comunidade – Caminhamos juntos, fortalecendo uns aos outros.
            <br />
            ✨ Responsabilidade – Cuidamos do axé com seriedade e compromisso.
            <br />
            ✨ Conhecimento – Estudo, prática e vivência como bases para evoluir
            espiritualmente.
            <br />
            <br />
            <br />O Ilê Àṣẹ Egbé Jàhári é, acima de tudo, uma família
            espiritual. Uma casa onde cada gesto, cada palavra e cada ritual são
            guiados pelo axé e pela força dos Òrìṣà.
          </span>
        </div>
      </section>
      <section id="babalorisa" className={styles.babalorisa}>
        <div className={styles.babalorisa_textbox}>
          <h2 className={styles.text_heading2}>Babá Jàhári</h2>

          <Image
            src="/BabaJahari_completo.png"
            alt="Babá Jahari"
            className={styles.babalorisa_image}
            width={800}
            height={800}
          />
        </div>

        <div className={styles.babalorisa_textbox}>
          <span className={styles.text_textbox}>
            sacerdote de Candomblé e fundador do Ilê Àṣẹ Egbé Jàhári, casa
            espiritual dedicada à preservação da ancestralidade, ao culto aos
            Òrìṣà e ao fortalecimento do axé. Sua missão é unir tradição e
            consciência, formando uma comunidade espiritual sólida e
            responsável.
            <br />
            <br />
            Além de sacerdote, Bàbá Jàhári atua como terapeuta transpessoal,
            utilizando o sagrado como caminho de cura, equilíbrio e
            autoconhecimento. Sua trajetória espiritual também o conecta à
            Umbanda, sendo praticante e umbandista comprometido, e ao culto
            ancestral aos Guardiões Exu e Pombogira, onde conduz rituais e
            orientações com profundidade e seriedade.
            <br />
            <br />
            Consultas e Oráculos
            <br />
            Como sacerdote, oferece atendimentos espirituais com diversos
            oráculos, entre eles:
            <br />
            Jogo de Búzios – oráculo ancestral do Candomblé, guia para decisões
            e caminhos de vida.
            <br />
            Baralho Cigano – instrumento de leitura espiritual e
            autoconhecimento.
            <br />
            Além desses, também se utiliza de outros métodos divinatórios que
            complementam sua atuação como conselheiro e guia espiritual.
            <br />
            <br />
            <br />
            Um líder do tempo presente
            <br />
            Bàbá Jàhári é também pesquisador, educador e escritor, responsável
            pela criação de apostilas, livros e projetos que difundem o
            conhecimento dos Òrìṣà e da espiritualidade de matriz africana.
            <br />
            Na era digital, tornou-se referência como sacerdote e influenciador,
            utilizando as redes sociais e grupos de estudo para ampliar o
            alcance do axé e levar os fundamentos da tradição a milhares de
            pessoas.
            <br />
            <br />
            <br />
            Missão espiritual Sua missão é clara: cuidar das pessoas através do
            axé, da ancestralidade e da espiritualidade verdadeira, acolhendo,
            orientando e fortalecendo cada pessoa em sua caminhada com os Òrìṣà
            e com os Guardiões.
            <br />
            <br />
            👉 Conheça o trabalho de Bàbá Jàhári ti Ològúnèdé e aproxime-se de
            um universo de sabedoria, axé e transformação.
          </span>
        </div>
      </section>
      <section id="diamond" className={styles.diamond}>
        <div className={styles.diamond_textbox}>
          <Image
            src="/GrupoDiamond.jpg"
            alt="Grupo Diamond"
            width={500}
            height={500}
            className={styles.diamond_image}
          />

          <span className={styles.text_textbox_white}>
            O Grupo Diamond é uma comunidade exclusiva criada por Bàbá Jàhári ti
            Ològúnèdé, onde o conhecimento, a tradição e a força do axé se
            encontram para transformar vidas.
            <br />
            <br />
            Durante mais de 3 anos de encontros e estudos, foi reunido um
            verdadeiro tesouro espiritual, agora disponível de forma organizada
            e acessível para todos os membros Diamond.
          </span>
        </div>

        <div className={styles.diamond_textbox}>
          <span className={styles.text_textbox_white}>
            O Grupo Diamond é uma comunidade exclusiva criada por Bàbá Jàhári ti
            Ològúnèdé, onde o conhecimento, a tradição e a força do axé se
            encontram para transformar vidas.
            <br />
            <br />
            Durante mais de 3 anos de encontros e estudos, foi reunido um
            verdadeiro tesouro espiritual, agora disponível de forma organizada
            e acessível para todos os membros Diamond.
            <br />
            <br />
            O que você encontra no Grupo Diamond:
            <br />
            ✨ Reuniões exclusivas com Bàbá Jàhári sobre diversos temas
            espirituais e de desenvolvimento pessoal.
            <br />
            ✨ Mais de 3 anos de conteúdos e estudos já realizados, disponíveis
            para consulta a qualquer momento.
            <br />
            ✨ Descontos incríveis em todos os e-books lançados pelo Ilê Àṣẹ
            Egbé Jàhári.
            <br />
            ✨ Acesso vitalício: entre uma vez e permaneça para sempre.
            <br />
            <br />
            <br />
            Contribuição única:
            <br />
            A integração ao Grupo Diamond é feita através de uma taxa única, sem
            mensalidades ou cobranças futuras. Um investimento simbólico diante
            do valor espiritual e do acervo de conhecimento disponível.
            <br />
            <br />
            👉 Faça parte e fortaleça sua caminhada no axé com conteúdo de
            qualidade, apoio e a sabedoria de Bàbá Jàhári.
          </span>

          <div className={styles.diamond_buttonarea}>
            <button className={styles.button}>
              <Image
                src="/GrupoDiamond.jpg"
                alt="Grupo Diamond"
                width={200}
                height={200}
                className={styles.buttonimage}
              />
              <Link
                href="https://pay.kiwify.com.br/jfMG2xa"
                className={styles.buttonlabel}
              >
                Comprar
              </Link>
            </button>
            <button className={styles.button}>
              <Image
                src="/GrupoDiamond.jpg"
                alt="Grupo Diamond"
                width={200}
                height={200}
                className={styles.buttonimage}
              />
              <Link
                href="http://egbejahari.com/diamond"
                className={styles.buttonlabel}
              >
                Saber Mais
              </Link>
            </button>
            <button className={styles.button}>
              <Image
                src="/IleAse_completo.png"
                alt="Ilê Àse"
                width={799}
                height={750}
                className={styles.buttonimage}
              />
              <Link href="#home" className={styles.buttonlabel}>
                Home
              </Link>
            </button>
          </div>
        </div>
      </section>
      <section id="alagbara" className={styles.alagbara}>
        <Image
          src="/alagbara_logo.png"
          alt="Alagbara"
          width={500}
          height={500}
          className={styles.alagbaraimage}
        />

        <button className={styles.button}>
          <Link href="/alagbara" className={styles.link}>
            Saber Mais
          </Link>
        </button>
      </section>
      <section id="umbanda" className={styles.umbanda}>
        <Image
          src="/logo-umbanda.png"
          alt="Centro Espiritual Caboclo Flecha Dourada"
          width={500}
          height={500}
          className={styles.alagbaraimage}
        />

        <button className={styles.button}>
          <Link href="/umbanda" className={styles.link}>
            Saber Mais
          </Link>
        </button>
      </section>
      <section id="terreiro197" className={styles.terreiro197}>
        <Image
          src="/logo-terreiro.jpg"
          alt="Terreiro 197"
          width={640}
          height={640}
          className={styles.terreiro197image}
        />

        <button className={styles.button}>
          <Link
            href="http://egbejahari.com/terreiro197"
            className={styles.buttonlabel}
          >
            Saber Mais
          </Link>
        </button>
      </section>
      <section id="wurashop" className={styles.wurashop}>
        <div className={styles.wurashop_textbox}>
          <Image
            src="/wurashop_logo.jpg"
            alt="Wurá Shop"
            width={800}
            height={800}
            className={styles.wurashopimage}
          />

          <div>
            <h2 className={styles.text_heading2_white}>
              WuráShop – Arte, Tradição e Axé
            </h2>

            <span className={styles.text_textbox_white}>
              A WuráShop nasceu com a missão de oferecer artigos religiosos de
              qualidade, feitos com respeito, beleza e compromisso com a
              tradição. Cada peça é pensada para unir funcionalidade ritual,
              estética refinada e a energia sagrada que acompanha o culto aos
              Òrìṣà.
            </span>
          </div>

          <div className={styles.wurashop_textbox}>
            <span className={styles.text_textbox_white}>
              Em nossa loja, você encontra:
              <br />
              ✨ Paramentas sob medida
              <br />
              confeccionadas com cuidado e exclusividade.
              <br />
              ✨ Conchas naturais nacionais e importadas
              <br />
              selecionadas uma a uma para usos rituais.
              <br />
              ✨ Pedras semipreciosas e cristais –<br />
              com energia única para fortalecer o axé.
              <br />
              ✨ Artigos especiais
              <br />
              feitos para atender às necessidades do culto e da espiritualidade.
              <br />
              <br />
              <br />
              A WuráShop não é apenas uma loja: é um espaço de conexão entre
              tradição, arte e espiritualidade. Nosso compromisso é entregar
              produtos que expressem a beleza do sagrado e fortaleçam a vivência
              de cada cliente dentro de sua caminhada espiritual.
              <br />
              <br />
              👉 Seja bem-vindo à WuráShop. Aqui, cada detalhe carrega axé.
            </span>

            <div className={styles.wurashop_buttonarea}>
              <button className={styles.button}>
                <Link
                  href="http://instagram.com/wurashopoficial"
                  className={styles.buttonlabel_white}
                >
                  Saber Mais
                </Link>
              </button>
              <button className={styles.button}>
                <Image
                  src="/IleAse_completo.png"
                  alt="Grupo Diamond"
                  width={799}
                  height={750}
                  className={styles.buttonimage}
                />
                <Link href="#home" className={styles.buttonlabel_white}>
                  Home
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="footer" className={styles.footer}>
        <Image
          src="/IleAse_completo_transparente.png"
          alt="Ilê Àse"
          width={500}
          height={500}
        />

        <div className={styles.footer_buttonarea}>
          <button className={styles.button_social}>
            <Link href="https://share.google/fEqAIm2Uy0LfNXXOu">
              <FaMagnifyingGlassLocation color="#785B26" size="2rem" />
            </Link>
          </button>
          <button className={styles.button_social}>
            <Link href="http://instagram.com/egbejahari">
              <FaInstagramSquare color="#785B26" size="2rem" />
            </Link>
          </button>
          {/* <button className={styles.button_social} ><FaFacebookSquare color='#785B26' size='2rem' /></button> */}
          <button className={styles.button_social}>
            <Link href="https://wa.me/message/EQFP5IEU2D74L1">
              <FaWhatsappSquare color="#785B26" size="2rem" />
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
