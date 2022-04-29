import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/react'
import {
  AccountCircle,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'

import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  const { push } = useRouter()

  return (
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link isActive={activeLink === '/profile/me'} title="Meu perfil">
          <AccountCircle size={24} />
          <span>Meu perfil</span>
        </S.Link>
      </Link>

      <Link href="/profile/orders" passHref>
        <S.Link
          isActive={activeLink === '/profile/orders'}
          title="Meus pedidos"
        >
          <FormatListBulleted size={24} />
          <span>Meus pedidos</span>
        </S.Link>
      </Link>

      <S.Link
        role="button"
        onClick={async () => {
          const data = await signOut({ redirect: false, callbackUrl: '/' })
          push(data.url)
        }}
      >
        <ExitToApp size={24} title="Sair" />
        <span>Sair</span>
      </S.Link>
    </S.Nav>
  )
}

export default ProfileMenu
