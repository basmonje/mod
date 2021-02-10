export function CountWords(texto) {
  const withing = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  const carac = withing.replace(/\W/g, " ")
  const palabras = carac.match(/\S+/g)
  const count = palabras ? palabras.length : 0
  const segundos = count / 5

  if (segundos <= 60) {
    const message = `un minuto`
    return message
  } else if (segundos >= 60 && segundos <= 3600) {
    const minutos = segundos / 60
    const message = `${Math.ceil(minutos)} min`
    return message
  }
}

export function Fechas(fecha) {
  const date = new Date(fecha)

  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  const dayWeek = date.getDay()

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "octubre",
    "Noviembre",
    "Diciembre",
  ]

  const days = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ]

  const message = `${days[dayWeek]} ${day} ${months[month]} ${year}`
  return message
}
