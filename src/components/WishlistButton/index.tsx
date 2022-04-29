import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import Button, { ButtonProps } from 'components/Button'
import { useWishlist } from 'hooks/use-wishlist'
import { useSession } from 'next-auth/react'
import Spinner from 'components/Spinner'
import { useState } from 'react'

type WishlistButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const WishlistButton = ({
  id,
  hasText,
  size = 'small'
}: WishlistButtonProps) => {
  const { data: session } = useSession()
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    isInWishlist(id) ? await removeFromWishlist(id) : await addToWishlist(id)
    setLoading(false)
  }

  const ButtonText = isInWishlist(id)
    ? 'Remover da Wishlist'
    : 'Adicionar na Wishlist'

  if (!session) return null

  return (
    <Button
      icon={
        loading ? (
          <Spinner />
        ) : isInWishlist(id) ? (
          <Favorite aria-label={ButtonText} />
        ) : (
          <FavoriteBorder aria-label={ButtonText} />
        )
      }
      onClick={handleClick}
      minimal
      size={size}
    >
      {hasText && ButtonText}
    </Button>
  )
}

export default WishlistButton
