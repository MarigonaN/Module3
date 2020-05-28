
const url = "https://striveschool.herokuapp.com/api/agenda/"


const getEvents = async () => {
    let response = await fetch(url)
  return await response.json()
};
const saveEvent = async (agendaEvent) => {
    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(agendaEvent),
        headers: new Headers({
            "Content-Type": "application/json",
        }),
    });
    return response;
};