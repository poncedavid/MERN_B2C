import { useState, useEffect } from "react";
import { apiPlatzi } from "../../Api/Platzi";

import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

function Home() {
  
  const [Items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiPlatzi}/products`)
        console.log(response);
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.error(`Oh no, ocurrió un error: ${error}`);
      }
    }
    fetchData()
  }, [])


  return (
    <Layout>
      Home

<section className=" grid gap-4 grid-cols-4 w-full max-w-screen-lg gap-4">
        {
          Items?.map(item => (
            <Card
              key={item.id}
              data={item}
            />
          ))
        }
      </section>

    </Layout>
  )
}

export default Home;
