import { createServer } from "miragejs";

const server = () => {
  let server = createServer();

  const list = {
    "data": [{
      "id": 1,
      "name": "Auto Chess",
      "region": "UK",
      "createdOn": 1656431413000,
      "price": [50, 500, 650],
      "csv": "Some CSV link for Auto Chess",
      "report": "Some report link for Auto Chess",
      "image_url": "https://bluestacksproject.s3.us-east-2.amazonaws.com/Page+1/Dashboard-2/Row/Thumb/Bitmap.png"
    },
    {
      "id": 2,
      "name": "Flow Free",
      "region": "CA, FR",
      "createdOn": 1559806715124,
      "price": [0, 0, 0],
      "csv": "Some CSV link for Flow Free",
      "report": "Some report link for Flow Free",
      "image_url": "https://bluestacksproject.s3.us-east-2.amazonaws.com/Page+1/Dashboard/Row+Copy+2-Row/Thumb/Bitmap.png"
    },
    {
      "id": 3,
      "name": "Garena Free Fire",
      "region": "FR",
      "createdOn": 1624549813000,
      "price": [100, 500, 900],
      "csv": "Some CSV link for Garena Free Fire",
      "report": "Some report link for Garena Free Fire",
      "image_url": "https://bluestacksproject.s3.us-east-2.amazonaws.com/Page+1/Dashboard-2/Row+Copy+3-Row/Thumb/Bitmap.png"
    },
    {
      "id": 4,
      "name": "MORTAL KOMBAT",
      "region": "JP",
      "createdOn": 1625761271000,
      "price": [100, 500, 900],
      "csv": "Some CSV link for MORTAL KOMBAT",
      "report": "Some report link for MORTAL KOMBAT",
      "image_url": "https://bluestacksproject.s3.us-east-2.amazonaws.com/Page+1/Dashboard-2/Row+Copy+4-Row/Thumb/Bitmap.png"
    },
    {
      "id": 5,
      "name": "Need for speed No Limits",
      "region": "JP",
      "createdOn": 1567093813000,
      "price": [100, 500, 900],
      "csv": "Some CSV link for Need for speed No Limits",
      "report": "Some report link for Need for speed No Limits",
      "image_url": "https://bluestacksproject.s3.us-east-2.amazonaws.com/Page+1/Dashboard-2/Row+Copy+6-Row/Thumb/Bitmap.png"
    },
    {
      "id": 6,
      "name": "Shadow Fight 3",
      "region": "JP",
      "createdOn": 1626106871000,
      "price": [100, 500, 900],
      "csv": "Some CSV link for Shadow Fight 3",
      "report": "Some report link for Shadow Fight 3",
      "image_url": "https://bluestacksproject.s3.us-east-2.amazonaws.com/Page+1/Dashboard-2/Row+Copy+7-Row/Thumb/Bitmap.png"
    },
    {
      "id": 7,
      "name": "Summoners War",
      "region": "JP",
      "createdOn": 1625761271000,
      "price": [200, 400, 700],
      "csv": "Some CSV link for Summoners War",
      "report": "Some report link for Summoners War",
      "image_url": "https://bluestacksproject.s3.us-east-2.amazonaws.com/Page+1/Dashboard/Row+Copy-Row/Thumb/Bitmap.png"
    },
    {
      "id": 8,
      "name": "PUBG MOBILE",
      "region": "JP",
      "createdOn": 1625934071000,
      "price": [300, 800, 1200],
      "csv": "Some CSV link for PUBG MOBILE",
      "report": "Some report link for PUBG MOBILE",
      "image_url": "https://bluestacksproject.s3.us-east-2.amazonaws.com/Page+1/Dashboard/Row+Copy+5-Row/Thumb/Bitmap.png"
    }
    ]
  };
  server.get("/api/campaigns", list);
};

export default server;
