import confetti from 'canvas-confetti'

export const runFireWorks = () => {
  const duration = 5 * 1000
  const animationEnd = Date.now() + duration
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

  function randoInRange(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  // eslint-disable-next-line no-undef
  const interval: NodeJS.Timeout = setInterval(function () {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) return clearInterval(interval)

    const particleCount = 50 * (timeLeft / duration)

    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randoInRange(0.1, 0.3), y: Math.random() - 0.2 },
      }),
    )
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randoInRange(0.7, 0.9), y: Math.random() - 0.2 },
      }),
    )
  }, 250)
}
