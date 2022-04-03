import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Loading from "../Loading";
import "./style.css";

const CardUI = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const last: any = [];
  data.slice(-2).map((item: any) => last.push(item.id));

  const fetchData = async (url: string) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData(`https://picsum.photos/v2/list/?page=${count}&limit=30`);
  }, [count]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="wrapper">
        {data.map((item: any) => {
          return (
            <Link className="link" to={`/Detail/${item.id}`}>
              <div className="card">
                
                <div>
                  <img className="image" src={item.download_url} alt="img" />
                </div>
                <h1>{item.author}</h1>
                <div>
                  <p className="last">
                    {item.id === last[0] || item.id === last[1] ? (
                      <p>{`I am the chosen one ${item.id}`}</p>
                    ) : null}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="footer">
        <Button onClick={() => setCount(count - 1)} label="Prev" />
        <p>{`Page ${count}`}</p>
        <Button onClick={() => setCount(count + 1)} label="Next" />
      </div>
    </>
  );
};

export default CardUI;
