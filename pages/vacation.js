import Barmen from "../components/Barmen";
import Interpreter from "../components/Interpreter";
import Uborshicha from "../components/Uborshicha";
import {Container} from "@chakra-ui/react";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { setMenuFilter } from "../slices/menuSlice";
import { useEffect } from "react";


export default function Vacation() {
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(setMenuFilter(0))},[])

    return (<>
        <Head>
            <title>Вакансии</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <div className="flex items-center justify-center">
        <Container maxWidth={1024}>
            <h2 className="mr-auto"><span className="text-[34px] font-bold">Вакансии</span></h2>
            <div className="flex items-center justify-center min-h-[55vh]">

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:mt-8 space-x-2 items-center justify-center">
            <Barmen/>
            <Interpreter/>
            <Uborshicha/>
        </div>
    </div></Container></div></>)
}