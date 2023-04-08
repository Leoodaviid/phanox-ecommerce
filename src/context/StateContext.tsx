'use client'
import { ProductData } from '@/models/models'
import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'

import { toast } from 'react-hot-toast'

type StateContextData = {
  showCart: boolean
  setShowCart: Dispatch<SetStateAction<boolean>>
  cartItems: ProductData[]
  totalQuanties: number
  totalPrice: number
  qty: number
  incQty: () => void
  decQty: () => void
  onAdd: (product: ProductData, quantity: number) => void
  toggleCartItemQuantity: (id: string, value: string) => void
  onRemove: (product: ProductData) => void
  setCartItems: (value: SetStateAction<ProductData[]>) => void
  setTotalPrice: (value: SetStateAction<number>) => void
  setTotalQuanties: (value: SetStateAction<number>) => void
}

const Context = createContext<StateContextData>({} as StateContextData)

export const StateContext = ({ children }: { children: ReactNode }) => {
  const [showCart, setShowCart] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<ProductData[]>([])
  const [totalQuanties, setTotalQuanties] = useState<number>(0)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [qty, setqty] = useState<number>(1)
  let foundProduct: ProductData | undefined

  const onAdd = (product: ProductData, quantity: number) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id)
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
    setTotalQuanties((prevTotalQuantites) => prevTotalQuantites + quantity)

    if (checkProductInCart) {
      const updateCartItems = cartItems
        // eslint-disable-next-line array-callback-return
        .map((cartProduct) => {
          if (cartProduct._id === product._id)
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity,
            }
        })
        .filter((product) => product !== undefined) as ProductData[]
      setCartItems(updateCartItems)
    } else {
      product.quantity = quantity
      setCartItems([...cartItems, { ...product }])
    }
    toast.success(`${qty} ${product.name} adicionado ao carrinho.`)
  }

  const onRemove = (product: ProductData) => {
    foundProduct = cartItems.find((item) => item._id === product._id)
    const newCartItems = cartItems.filter((item) => item._id !== product._id)
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - (foundProduct?.price ?? 0) * (foundProduct?.quantity ?? 0),
    )
    setTotalQuanties((prevTotalQuanties) => prevTotalQuanties - (foundProduct?.quantity ?? 0))
    setCartItems(newCartItems)
  }

  const toggleCartItemQuantity = (id: string, value: string) => {
    foundProduct = cartItems.find((item) => item._id === id)
    // eslint-disable-next-line no-unused-vars
    const index = cartItems.findIndex((product) => product._id === id)
    const newCartItems = cartItems.filter((item) => item._id !== id)

    if (foundProduct) {
      if (value === 'inc') {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }])
        setTotalPrice((prevTotalPrice) => prevTotalPrice + (foundProduct?.price ?? 0))
        setTotalQuanties((prevTotalQuanties) => prevTotalQuanties + 1)
      } else if (value === 'dec') {
        if (foundProduct.quantity > 1) {
          setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }])
          setTotalPrice((prevTotalPrice) => prevTotalPrice - (foundProduct?.price ?? 0))
          setTotalQuanties((prevTotalQuanties) => prevTotalQuanties - 1)
        }
      }
    }
  }

  const incQty = () => {
    setqty((prevQty) => prevQty + 1)
  }
  const decQty = () => {
    setqty((prevQty) => {
      if (prevQty - 1 < 1) return 1
      return prevQty - 1
    })
  }

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalQuanties,
        totalPrice,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuanties,
      }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
