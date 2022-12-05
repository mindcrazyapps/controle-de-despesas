export default function createTransaction(name, value, array) {
  const li = document.createElement("li")
  li.setAttribute("class", "transactions-cards")
  li.style.borderRight = array[1]

  const spanName = document.createElement("span")
  spanName.setAttribute("class", "span-name")
  spanName.textContent = name

  const spanValue = document.createElement("span")
  spanValue.setAttribute("class", "span-value")
  spanValue.textContent = `${array[0]} ${value}`

  const imgTrash = document.createElement("img")
  imgTrash.setAttribute("class", "delete-button")
  imgTrash.src = "./src/assets/trash-icon.png"
  imgTrash.alt = "lixeira"

  const nameAndValue = document.createElement("div")
  nameAndValue.setAttribute("class", "name-and-value")

  nameAndValue.appendChild(spanName)
  nameAndValue.appendChild(spanValue)

  li.appendChild(nameAndValue)
  li.appendChild(imgTrash)

  return li
}
