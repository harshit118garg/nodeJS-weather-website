const submitBtn = document.getElementById('submitBtn');

const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');

const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');


const getInfo = async (e) => {
    e.preventDefault();
    let city = cityName.value;

    if (city === "") {
        city_name.innerText = `Please enter the city before search`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=781e5612c2e0bf16a9ad111a1c54bce8`;
            
            const response = await fetch(url);
            const data = await response.json();
            const arr = [data];
            console.log(arr);
            
            city_name.innerText = `${arr[0].name}, ${arr[0].sys.country }`;
            temp_real_val.innerText = arr[0].main.temp;
            const tempMood = arr[0].weather[0].main;
            
            temp_status.innerText = tempMood;
            
            datahide.classList.remove('data_hide');
        } catch {
            city_name.innerText = `Please enter the city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);
