import axios from 'axios'
import { useEffect, useState } from "react";
function App()

{
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001").then(res => {

      setDatas(res.data)  
    })
  }, [])

  return (
    <div className="App">
      {
        datas.map((x,index) => {
          return <p key={x.index}>{x.name}{x.age}{x.place}</p>
        })
      }
    </div>
  );
}
export default App;
