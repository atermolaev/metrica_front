import axios from 'axios';

export const getMoneyCource = async () => {
    return await axios.get('https://www.cbr-xml-daily.ru/daily_json.js'); 
}