import { ContactsContainer } from '@/styles/pages/contacts'
import Image from 'next/image'

import EsmalteImg from '../assets/imgEsmalte.png'
import {
  EnvelopeSimple,
  InstagramLogo,
  Palette,
  WhatsappLogo,
} from 'phosphor-react'

export default function Contacts() {
  return (
    <ContactsContainer>
      <Image
        src={EsmalteImg}
        height={140}
        width={300}
        alt="imagem de esmaltes"
      />

      <p>
        <Palette size={25} />
        Expressão de Estilo: Unhas que Falam por Você.
      </p>

      <main>
        <section>
          <h2>Localização</h2>

          <span>
            <strong>Cidade:</strong>Arapiraca
          </span>

          <span>
            <strong>Bairro:</strong>Boa vista
          </span>

          <span>
            <strong>Rua:</strong> José Cirilo
          </span>
        </section>

        <section>
          <h2>Saiba mais</h2>
          <a
            href="https://www.instagram.com/rafaela_santosnailsdesigner/"
            title="Link instagram"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramLogo size={20} weight="bold" />
            Instagram
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=5582998397815"
            title="Link whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsappLogo size={20} weight="bold" />
            Whatsapp
          </a>
          <span>
            <EnvelopeSimple size={18} />
            rafaela@email.com
          </span>
        </section>
      </main>
    </ContactsContainer>
  )
}
