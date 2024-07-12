import { useState } from "react"

export default function Header ({setName, data}) {
    const [search, setSearch] = useState("")

    function searchName () {
        const rs = data.filter(name => name.name.toLowerCase().includes(search.toLowerCase())
         )
         setName(rs)
      }

    return (
        <header className="header_container">
            <input 
            type="text"
            name=""
            id=""
            placeholder="Search Name"
            onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={searchName}>search</button>
        </header>
    )
}