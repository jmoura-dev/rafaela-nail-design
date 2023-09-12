import Image from 'next/image'
import {
  AboutContainer,
  HeaderContainer,
  HeaderContentDesktop,
  HeaderContentMobile,
} from './styles'
import { List, X } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { ScreenSizeContext } from '@/contexts/screenSizeContext'

export function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  const { isScreenMobile } = useContext(ScreenSizeContext)

  function handleOpenMenu() {
    if (openMenu) {
      setOpenMenu(false)
    } else {
      setOpenMenu(true)
    }
  }

  return (
    <HeaderContainer>
      {isScreenMobile ? (
        <HeaderContentMobile>
          <button onClick={handleOpenMenu} title="Menu">
            <List size={24} weight="bold" color="#A0C5F7" />
          </button>

          {openMenu && (
            <nav>
              <button onClick={handleOpenMenu}>
                <X size={20} weight="bold" color="#C4C4CC" />
              </button>
              <ul>
                <li>
                  <Link href="/" onClick={handleOpenMenu}>
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="/services" onClick={handleOpenMenu}>
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="/clients" onClick={handleOpenMenu}>
                    Clientes
                  </Link>
                </li>

                <li>
                  <Link href="/contacts" onClick={handleOpenMenu}>
                    Contatos
                  </Link>
                </li>
              </ul>
            </nav>
          )}
          <div>
            <AboutContainer>
              <strong>Rafaela</strong>
              <span>Nail Designer</span>
            </AboutContainer>
            <Image src={logo} width={70} height={60} alt="Imagem do logo" />
          </div>
        </HeaderContentMobile>
      ) : (
        <HeaderContentDesktop>
          <nav>
            <ul>
              <li>
                <Link href="/" onClick={handleOpenMenu}>
                  Início
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={handleOpenMenu}>
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/clients" onClick={handleOpenMenu}>
                  Clientes
                </Link>
              </li>
              <li>
                <Link href="/contacts" onClick={handleOpenMenu}>
                  Contatos
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <AboutContainer>
              <strong>Rafaela</strong>
              <span>Nail Designer</span>
            </AboutContainer>
            <Image src={logo} width={70} height={60} alt="Imagem do logo" />
          </div>
        </HeaderContentDesktop>
      )}
    </HeaderContainer>
  )
}
