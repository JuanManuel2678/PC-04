import { useEffect, useState } from "react";
import ListCard from "./components/ListCard";
import UserCard from "./components/UserCard";
import Header from "./components/Header";

export default function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState([])
  

  async function getData() {
    const rs = await fetch("https://jsonplaceholder.typicode.com/users");
    const rsJson = await rs.json();

    const filterData = rsJson.map((user) => ({
      id: user?.id,
      name: user?.name,
      username: user?.username,
      email: user?.email,
    }));
    setData(filterData);
    setName(filterData)
    console.log(filterData);
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <Header setName={setName} data={data} />
      <ListCard>
        {name && name.map((item) => <UserCard key={item.id} item={item} />)}
      </ListCard>
    </>
  );
}
