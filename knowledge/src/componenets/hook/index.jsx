import {useState,useEffect} from 'react'
export function useFetch(url){
const[data,setData]=useState([]);
const[loading,setLoading]=useState([]);
useEffect(() => {
    if (!url){
    return setLoading(true)
    }
async function getData(){
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(`http error! status:${response.status}`);
    }
    const data=await response.json();
    console.log(data);
    setData(data);
    console.log(data[0].article);
    setLoading(false);
}
getData()
}, [url])
return {data,loading}
}