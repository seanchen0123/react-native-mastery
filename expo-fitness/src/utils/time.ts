const paddZero = (num: number): string => {
  return num < 10 ? `0${num}` : `${num}`
}


export const calculateDurationMinutesSeconds = (createAt: Date, now: Date): string => {
  const diff = now.getTime() - createAt.getTime()
  const minutes = Math.floor(diff / 1000 / 60)
  const seconds = Math.floor(diff / 1000) % 60
  return `${paddZero(minutes)}:${paddZero(seconds)}`
}
