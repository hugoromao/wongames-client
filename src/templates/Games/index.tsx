import { useState } from 'react'

import Base from 'templates/Base'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'

import * as S from './styles'
import { useQueryGames } from 'graphql/queries/games'
import { useRouter } from 'next/router'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'
import { ParsedUrlQueryInput } from 'querystring'
import Empty from 'components/Empty'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter()

  const [start, setStart] = useState(0)

  const { data, loading, fetchMore } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 15 + start,
      filters: parseQueryStringToWhere({ queryString: query, filterItems }),
      start: 0,
      sort: query.sort as string | null
    }
  })

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items
    })
    return
  }

  const handleShowMore = async () => {
    setStart(data?.games?.data.length || 0)
    fetchMore({
      variables: {
        limit: 3,
        start: data?.games?.data.length,
        filters: parseQueryStringToWhere({ queryString: query, filterItems })
      }
    })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

        {loading ? (
          <p>Loading...</p>
        ) : (
          <section>
            {data?.games?.data.length ? (
              <>
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
              </>
            ) : (
              <Empty
                title=":("
                description="We didn't find any games with this filter"
                hasLink
              />
            )}

            <S.ShowMore>
              {loading ? (
                <S.ShowMoreLoading
                  src="/img/dots.svg"
                  alt="Loading more games"
                />
              ) : (
                <S.ShowMoreButton role="button" onClick={handleShowMore}>
                  <p>Show More</p>
                  <ArrowDown size={35} />
                </S.ShowMoreButton>
              )}
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
