import Base from 'templates/Base'

import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'

import * as S from './styles'
import { useState } from 'react'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGamesTitle: string
  newGames: GameCardProps[]
  mostPopularGamesTitle: string
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGamesTitle: string
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  freeGamesTitle: string
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  newGamesTitle,
  newGames,
  mostPopularGamesTitle,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGamesTitle,
  upcomingGames,
  upcomingHighlight,
  freeGamesTitle,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => {
  const [banners] = useState<BannerProps[]>([
    {
      title: 'LEGO Star Wars: A Saga Skywalker',
      subtitle: 'Domine o Universo!',
      buttonLabel: 'COMPRE AGORA',
      buttonLink: 'http://localhost:3000',
      img:
        'https://nerdolandia.com/wp-content/uploads/2022/03/41c37606-aad6-492f-8b68-db3ebfece826.jpeg',
      ribbon: 'LANÇAMENTO',
      ribbonColor: 'primary',
      ribbonSize: 'normal'
    },
    {
      title: 'Life Is Strange: TRUE COLORS',
      subtitle: 'Mude vidas e destinos com o poder psíquico da Empatia.',
      buttonLabel: 'COMPRE AGORA',
      buttonLink: 'http://localhost:3000',
      img: 'https://www.pdvg.it/wp-content/uploads/2021/09/gm9295.jpg',
      ribbon: 'GOT',
      ribbonColor: 'secondary',
      ribbonSize: 'normal'
    },
    {
      title: "Marvel's Spider-Man: Miles Morales",
      subtitle:
        'Acompanhe a trajetória de Miles Morales enquanto ele aprende a dominar poderes incríveis e explosivos para se tornar o novo Spider-Man..',
      buttonLabel: 'COMPRE AGORA',
      buttonLink: 'http://localhost:3000',
      img:
        'https://gmedia.playstation.com/is/image/SIEPDC/spiderman-miles-morales-screenshot-04-disclaimer-en-01oct20?$2400px--t$',
      ribbon: 'Exclusivo',
      ribbonColor: 'primary',
      ribbonSize: 'normal'
    }
  ])
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase title={newGamesTitle} games={newGames} color="black" />
      </S.SectionNews>

      <Showcase
        title={mostPopularGamesTitle}
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />

      <Showcase
        title={upcomingGamesTitle}
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase
        title={freeGamesTitle}
        highlight={freeHighlight}
        games={freeGames}
      />
    </Base>
  )
}

export default Home
