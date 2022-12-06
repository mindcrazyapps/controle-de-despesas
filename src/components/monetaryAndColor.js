export default function monetaryAndColor(value) {
  let monetary = "R$ + "
  let color = "5px solid #2ecc71"

  if (value < 0) {
    monetary = "R$  "
    color = "5px solid #c0392b"

    const monetaryAndColor = [monetary, color]
    return monetaryAndColor
  }

  const monetaryAndColor = [monetary, color]
  return monetaryAndColor
}
