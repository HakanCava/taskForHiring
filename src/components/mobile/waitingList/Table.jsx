import "./table.css";

const Table = ({ list, show}) => {
  console.log(list);
  console.log(show);
  const sliceList=show?list:list.slice(0, 4)

  console.log(sliceList);
  return (
    <table className="mobil-table">
      <thead className="mobil-thead">
        <tr className="mobil-thead-tr">
          <th className="mobil-th-1">Game Type</th>
          <th className="mobil-th-2">Game Rating</th>
          <th className="mobil-th-3">Players</th>
          <th className="mobil-th-4">Waiting Time</th>
        </tr>
      </thead>
      <tbody className="mobil-tbody">
        {sliceList?.map((item) => (
          <tr className="mobil-tbody-tr" key={item.id}>
            <td className="mobil-td-1">
              <img src={item.gameType} alt="" />
            </td>
            <td className="mobil-td-2">{item.gameRating.includes("./img/")?<img src={item.gameRating} alt="" />:item.gameRating}</td>
            <td className="mobil-td-3">
              <div className="mobil-playersContainer">
              <div className="players">
                  <p>{item.players[0]}</p> <p>{item.players[1]}</p>
                </div>
                <div className="players">
                  <p>{item.players[2]}</p> <p>{item.players[3]}</p>
                </div>
              </div>
            </td>
            <td className="mobil-td-4">{item.waitingTime} mins</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
