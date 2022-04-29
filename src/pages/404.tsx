import { Container } from 'components/Container'
import Empty from 'components/Empty'
import Base from 'templates/Base'

export default function Page404() {
  return (
    <Base>
      <Container>
        <Empty
          title="404: Não encontrado"
          description="Ops... esta página não existe. Volte para a loja e aproveite nossas ofertas."
          hasLink
        />
      </Container>
    </Base>
  )
}
