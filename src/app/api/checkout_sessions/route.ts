import Stripe from 'stripe'
import { urlFor } from '@/lib/client'
import { ProductData } from '@/models/models'

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
})

export async function POST(req: Request, res: Response) {
  const cartItems: ProductData = await req.json()
  if (!cartItems || !Array.isArray(cartItems)) {
    return new Response(JSON.stringify({ message: 'Cart items não é um array' }))
  }

  // Transforma os itens do carrinho em itens de checkout
  const transformCartItems = cartItems.map((item) => {
    const imageUrl = urlFor(item.image[0]).url()
    return {
      price_data: {
        currency: 'brl',
        product_data: {
          name: item.name,
          images: [imageUrl],
        },
        unit_amount: item.price * 100,
      },
      adjustable_quantity: {
        enabled: true,
        minimum: 1,
      },
      quantity: item.quantity,
    }
  })

  try {
    // Cria uma nova sessão de checkout
    const params: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ['card'],
      line_items: transformCartItems,
      submit_type: 'pay',
      mode: 'payment',
      billing_address_collection: 'auto',
      shipping_options: [
        { shipping_rate: 'shr_1MtDRODGCEfyrVG51OLW6rBj' },
        { shipping_rate: 'shr_1MtDShDGCEfyrVG5wJ2Exe3S' },
      ],
      success_url: `https://ecommerce-phanox-tan.vercel.app/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://ecommerce-phanox-tan.vercel.app/fail?session_id={CHECKOUT_SESSION_ID}`,
    }
    const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params)
    return new Response(JSON.stringify(checkoutSession))
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Internal server error'
    return new Response(JSON.stringify({ statusCode: 500, message: errorMessage }))
  }
}
