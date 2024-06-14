import { useEffect, useState } from "react";
import ListCard from "./components/ListCard";
import UserCard from "./components/UserCard";

export default function App() {
  const [data, setData] = useState([]);
 

  async function getData() {
    const rs = await fetch('https://jsonplaceholder.typicode.com/users');
    const rsJson = await rs.json();

    const filterData = rsJson.map(user => ({
      id: user?.id,
      name: user?.name,
      username: user?.username,
      email: user?.email
    }));
    setData(filterData);
    console.log(filterData)
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <ListCard>

    {data && data.map(item =>( 
      <UserCard 
      key={item.id} 
      user={item}
       />
    ))
      }
      
    </ListCard>
  );
}