import Base from 'templates/Base'

import GameInfo, { GameInfoProps } from 'components/GameInfo'

import * as S from './styles'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import TextContent from 'components/TextContent'
import GameDetails from 'components/GameDetails'

import { GameDetailsProps } from 'components/GameDetails'
import { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'
import Showcase from 'components/Showcase'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <S.Main>
      <S.Cover src={cover} role="image" aria-label="cover" />
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
      </S.SectionGameDetails>

      <Showcase
        title="Upcoming"
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase title="You may like these games" games={recommendedGames} />
    </S.Main>
  </Base>
)

export default Game
