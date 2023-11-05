import React,{useState,useEffect} from "react"; import List from "./List"; import axios from "axios";

function App() {
var [card,Setcard]=useState([]);
const
token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDA
tYTFlYi0
3ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcm

NlbGw6Z2Ft
ZWFwaSIsImp0aSI6IjZmMDhhM2Y4LTg1NDgtNGM4Ny04MjhmLTI5YWZkMzcwNGVi
MSIsImlhdCI6MT
Y5NjY2NzIyNCwic3ViIjoiZGV2ZWxvcGVyLzIzZWI3ZWM3LTk3NjYtOTMzNy1lNDRh
LTVlODcwZDk2
ODY5MyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGV
yL3NpbH
ZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0OS4yMDQuMTE1LjIzNCJdL
CJ0eXBl
IjoiY2xpZW50In1dfQ._lyLdjqezx2tGH9j5tvH0RWx5KUTGL7DEM8KWMSvx0f4YboME
XxBuGbIRFK1qy_jNELhSPLAWTN710DgNoPtw";
var cors=require('cors');

const [currenturl,setcurrenturl]= useState("https://proxy.royaleapi.dev/v1/cards?limit=20") const [load,setload]=useState(true) //var express=require('express');

//var app=express();
//App.use(cors());
const cfg={
headers:{
"Access-Control-Allow-Origin": "*",
"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
"Access-Control-Allow-Headers":"Content-Type,X-AuthToken,Origin,Authorization",
"Authorization":"Bearer
${eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTF
lYi03ZmEx

LTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6
Z2FtZWFwa
SIsImp0aSI6IjhiYTE3NGI4LTZhOWQtNDViMi1iZjkyLTVlMWNiNDM4NWM2ZiIsImlhd
CI6MTY5Njc
wOTA4OSwic3ViIjoiZGV2ZWxvcGVyLzIzZWI3ZWM3LTk3NjYtOTMzNy1lNDRhLTVl
ODcwZDk2ODY5M
yIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3Npb
HZlciI
sInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0NS43OS4yMTguNzkiXSwidHlwZ
SI6ImNsa
 
WVudCJ9XX0.2EXhoFupm88uj_ClTD3hzNnDYWhGTMog9_0y9Q5pnlHd4O2qkyLyNaU
F2QvbBZdHP5i
J0PNFZvBip8mYFItOvg"
}
}
useEffect(()=>{//Fetch once //[] everytime cururl change fetch
setload(true)
let c1
axios.get(currenturl,cfg,
{
cancelToken: new axios.CancelToken(c =>c1=c)
}
).then(

response =>{
setload(false)
Setcard(response.data.items.map(p=>p.iconUrls.medium))
console.log(card)
}
).catch(err=>console.log(err))
return ()=> c1()
},[currenturl])
if(load) return "Loading..."
return (
<List card={card}></List>
);
}
export default App;
index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);
