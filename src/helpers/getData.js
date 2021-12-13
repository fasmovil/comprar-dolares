export const getData = async () => {
  const api_key = '229742ab17618c9d26352736';
  const url = `https://v6.exchangerate-api.com/v6/${api_key}/pair/USD/ARS`;
  const response = await fetch(url);
  const data = await response.json();
  
  return data;
}
