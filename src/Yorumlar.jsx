function Yorumlar({limit}) {
  const yorumlar = [
    {id:1,icerik:"Yorum 1",tarih:"2022-11-01" },
    {id:2,icerik:"Yorum 2",tarih:"2022-11-02" },
    {id:3,icerik:"Yorum 3",tarih:"2022-11-03" },
    {id:4,icerik:"Yorum 4",tarih:"2022-11-04" }
];
  return (
    <>
      {yorumlar.map((yorum,index) => {
        if (index < (limit)){
        return <p key={yorum.id}>{yorum.icerik}<span>{yorum.tarih}</span></p>;
        }
        return <p key={yorum.id}></p>
      })}
    </>
  );
}
export default Yorumlar;
