export const fetchSensors = () => {
  fetch("http://ufmawmobr.online/client").then((res) =>
    res.json()
  )
}


