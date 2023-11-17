export const fetchSensors = () => {
  fetch("http://host.docker.internal:8080/client").then((res) =>
    res.json()
  )
}


