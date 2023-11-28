export const fetchSensors = () => {
  fetch("http://143.244.149.136:57655/client").then((res) =>
    res.json()
  )
}


