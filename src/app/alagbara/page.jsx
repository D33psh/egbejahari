import Image from "next/image"
import style from "./style.module.css"

export default function Alagbara() {
  return (
    <div className={style.container}>
      <section className={style.one}>
        <h1 className={style.title}>O Sagrado Masculino</h1>

        <span className={style.subtitle}>Grupo do Homem Alagbara</span>
        <div className={style.divider}></div>

        <button className={style.button}>Saiba Mais</button>
      </section>
      <section className={style.two}>
        <Image src='/alagbara-background.jpg' alt="Alagbara" className={style.roudedAlagbara} width={716} height={716} />
        
        <div className={style.textBox}>
          <h2 className={style.title}>Àlàgbára – Força, Consciência e Sagrado Masculino</h2>

          <span className={style.subtitle}>
            O Àlàgbára nasce como um espaço de encontro, autoconhecimento e reconexão com a essência do masculino sagrado. Nossa missão é resgatar valores ancestrais, cultivar a presença consciente e fortalecer homens que buscam equilíbrio entre corpo, mente e espírito.
            <br /> <br />
            Aqui, o homem é convidado a olhar para dentro, reconhecer suas potências, curar suas feridas e transformar sua forma de estar no mundo. Trabalhamos com rodas de estudos, vivências, terapias e rituais que unem sabedoria ancestral, espiritualidade e práticas contemporâneas de cuidado e autodesenvolvimento.
            <br /> <br />
            O caminho do Àlàgbára é um chamado para viver com mais amor, respeito e responsabilidade consigo mesmo, com os outros e com a natureza.
            <br /> <br />
            Este é um espaço de acolhimento, onde cada homem pode se lembrar de sua verdadeira força: aquela que não oprime, mas que sustenta; que não fere, mas que protege; que não se perde, mas se renova em cada passo.
          </span>
        </div>
      </section>
    </div>
  )
}