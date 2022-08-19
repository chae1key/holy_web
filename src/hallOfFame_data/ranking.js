const ranking = [
    {
      "아이디": "Minhee",
      "통독횟수": 20
    },
    {
      "아이디": "Chaewon",
      "통독횟수": 30
    },
    {
        "아이디": "Yujin",
        "통독횟수": 40
    },
    {
        "아이디": "Eunho",
        "통독횟수": 100
    },
  ];

  ranking.sort((a,b) => {
    return b.통독횟수 - a.통독횟수
    })

export default ranking.slice(0,3) //3위까지만 출력

