import { MdCloud } from "react-icons/md";
import moment from "moment/moment";
import { useEffect, useContext} from "react";
import { useTranslation } from "react-i18next";
import "moment/min/locales"
import { Date } from "../context/Date";
import { Localcontext } from "../context2/LocalContext";

export default function WeatherInfo({temp}) {
    const {date,setDate} = useContext(Date)
    const {local,} = useContext(Localcontext)
    const [t,i18n] = useTranslation()
    useEffect(() => {
        i18n.changeLanguage("ar")
        setDate(moment().format('MMMM Do YYYY'))
    },[])
    return (
        <>
        {/*  */}
        <div className="text-white font-[Ibm] flex justify-end items-end p-2" style={{direction:local==="en"?"ltr":"rtl"}}>
            <p className="text-[19px]">{date}</p>
            <h1 className="text-[60px] ml-3 font-bold">{t("Hama")}</h1>
        </div>
        {/*  */}
            <hr className="text-white"></hr>
            {/*  */}
            <div className="flex justify-between items-center px-4 py-1 font-[Ibm]" style={{direction:local==="en"?"ltr":"rtl"}}>
                <MdCloud className="text-white text-[180px]"/>
                {/*  */}
                <div className="text-white text-end">
                    <div className="flex items-center">
                    <img src={temp.icon} className="mr-1 w-18"></img>
                    <h1 className="text-[80px]">{temp.tempNumber}</h1>
                    </div>
                    <p className="text-[15px]">{t(temp.skyStuts)}</p>
                    <div className="flex justify-end items-center mt-4 text-[12px]">
                        <p>{t("max")} : {temp.max}</p>
                        <span className="m-1.5">|</span>
                        <p>{t("min")} :{temp.min}</p>
                    </div>
                </div>
                {/*  */}
            </div>
            {/*  */}
        </>
    )
}