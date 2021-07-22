export const getAllMissions = async () => {
  try {
    const response = await fetch("https://api.spacexdata.com/v3/missions");
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
