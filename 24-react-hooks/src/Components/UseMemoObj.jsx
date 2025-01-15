import { use, useEffect, useMemo, useState } from "react";

export default function UseMemoObj() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  //   const location = {
  //     country: isKorea ? "korea" : "abroad",
  //   };

  const location = useMemo(() => {
    return { country: isKorea ? "korea" : "abroad" };
  }, [isKorea]);

  //   location이 변경될때마다 실행
  useEffect(() => {
    console.log("location 변경될때마다 실행됩니다 😎");
  }, [location]);
  return (
    <>
      <div style={{ border: "1px solid blue" }}>
        <input
          type="number"
          name=""
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          value={number}
        />
        <p>나라: {location.country}</p>
        <button
          onClick={() => {
            setIsKorea(!isKorea);
          }}
        >
          나라 변경
        </button>
      </div>
    </>
  );
}
