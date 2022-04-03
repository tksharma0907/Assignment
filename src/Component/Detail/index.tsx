import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "../Button";
import Loading from "../Loading";

type details = {
  id: string;
  download_url: string;
  data: any;
  author: string;
  onClick: any;
  label: string;
};
const Detail = () => {
  const [data, setData] = useState({} as details);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<details>();
  const history = useHistory();

  const fetchData = async (url: string) => {
    try {
      const response: any = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(`https://picsum.photos/id/${id}/info`);
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <img className="image" src={data.download_url} alt="img" />
        <p>{`Author : ${data.author}`}</p>
        <Button onClick={() => history.goBack()} label="Back" />
      </div>
    </>
  );
};

export default Detail;
