import { useState } from 'react'

import Base from 'templates/Base'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'

import * as S from './styles'
import { useQueryGames } from 'graphql/queries/games'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const [start, setStart] = useState(0)
  const { data, loading, fetchMore } = useQueryGames({
    variables: {
      limit: 15 + start,
      start: 0
    }
  })

  const handleFilter = () => {
    return
  }

  const handleShowMore = async () => {
    setStart(data?.games?.data.length || 0)
    fetchMore({
      variables: { limit: 3, start: data?.games?.data.length }
    })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        {loading ? (
          <p>Loading...</p>
        ) : (
          <section>
            <Grid>
              {data?.games?.data?.map(({ attributes }) => (
                <GameCard
                  key={attributes?.slug}
                  title={attributes?.name || ''}
                  slug={attributes?.slug || ''}
                  developer={
                    attributes?.developers?.data[0]?.attributes?.name || ''
                  }
                  img={`http://localhost:1337${attributes?.cover?.data?.attributes?.url}`}
                  price={attributes?.price || 0}
                />
              ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
