import Apifetch_data_1 from "../components/Apifetch_data_1";
import React from "react";
// export async function getStaticProps() {
    export async function getServerSideProps() {
    // const res = await fetch("http://34.93.230.151:8081/jplus/articlebyid/22760562")
    const res = await fetch("https://jagranampapi132443254.jagran.com/jplus/amp/articlebyid/22808652")
    const data = await res.json()
    //console.log(data);
    return {
        props: { data } // will be passed to the page component as props
    }
}

function Apifetchdata_1(props) {
    const {data} =props
   
    return (
        
        <Apifetch_data_1 data={data}></Apifetch_data_1>
       
    )
}
export default Apifetchdata_1 
