import WeatherInfo from "./WeatherInfo";

export default function WeatherStruc({temp}) {
    return (
        <>
        <div className="w-[500px] min-h-[300px] p-2.5 bg-blue-900 rounded-lg shadow-[2px_2px_10px_#009]">
            <WeatherInfo temp = {temp}/>
        </div>
        </>
    )
}