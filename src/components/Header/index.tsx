import Image from 'next/image'
import { AboutContainer, HeaderContainer, HeaderContent } from './styles'
import { List, X } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  function handleOpenMenu() {
    if (openMenu) {
      setOpenMenu(false)
    } else {
      setOpenMenu(true)
    }
  }

  return (
    <HeaderContainer>
      <HeaderContent>
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
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/clients">Clientes</Link>
              </li>
              <li>
                <Link href="/services">Serviços</Link>
              </li>
              <li>
                <Link href="/contact">Contatos</Link>
              </li>
            </ul>
          </nav>
        )}
        <div>
          <AboutContainer>
            <strong>Rafaela</strong>
            <span>Nail Design</span>
          </AboutContainer>
          <Image src={logo} width={70} height={60} alt="Imagem do logo" />
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
