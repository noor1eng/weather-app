import WeatherStruc from "./components/WeatherStruc"
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Date } from "./context/Date";
import moment from "moment/moment";
import "moment/min/locales"
import { Localcontext } from "./context2/LocalContext";


function App() {
  const [date,setDate] = useState("")
  const [local,setLocal] = useState("en")
  const [,i18n] = useTranslation()
  const [temp,setTemp] = useState({
    tempNumber:null,
    skyStuts:"",
    min:null,
    max:null,
    icon:null
    }
  )
  useEffect(() => {
    i18n.changeLanguage(local)
    axios
    .get('https://api.openweathermap.org/data/2.5/weather?lat=35.1333&lon=36.7500&appid=926315e1b5fc01b8cf67f0ce312fb6ff')
      .then(function (response) {
        //get the temp number
        const responseTemp = (parseInt(response.data.main.temp - 272.15));
        // get the sky staut
        const sky = response.data.weather[0].description
        //get min and max temp
        const min = parseInt(response.data.main.temp_min - 272.15)
        const max = parseInt(response.data.main.temp_max - 272.15)
        //get the icon
        const icon = response.data.weather[0].icon
        console.log(icon);
        
        setTemp({skyStuts:sky,tempNumber:responseTemp,min:min,max:max,icon:`https://openweathermap.org/img/wn/${icon}@2x.png`})
      })
      .catch(error => {
        error = "wrong path"
        console.log(error);
      })
    },[])
    // translate func
    function handleTranslate() {
      if(local === "en") {
        setLocal("ar")
        i18n.changeLanguage("ar")
        moment.locale("ar")
        setDate(moment().format('MMMM Do YYYY'))
      } else {
        setLocal("en")
        i18n.changeLanguage("en")
        moment.locale("en")
        setDate(moment().format('MMMM Do YYYY'))
        
      }
    }
    // translate func

    return (
    <>
    <Date.Provider value={{date,setDate}}>
      <Localcontext.Provider value={{local,setLocal}}>
    <div className=" w-full h-screen bg-blue-700">
    <div className=" container mx-auto flex justify-center items-center h-screen">
      <WeatherStruc temp = {temp}/>
      <button className="text-white mt-1.5 cursor-pointer font-[Ibm] absolute bottom-[100px] left-[32%]" onClick={(handleTranslate)}>{local==="en"?"ar":"en"}</button>
    </div>
    </div>
      </Localcontext.Provider>
    </Date.Provider>
    </>
  )
}

export default App
