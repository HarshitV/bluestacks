import { createServer } from "miragejs";

const server = () => {
  let server = createServer();

  const list = {
    "data": [{
        "id": 1,
        "name": "Auto Chess",
        "region": "UK",
        "createdOn": 1656431413000,
        "price": [50,500,650],
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url":"https://bluestacksproject.s3.us-east-2.amazonaws.com/Page+1/Dashboard-2/Row/Thumb/Bitmap.png" 
      },
      {
        "id": 2,
        "name": "Flow Free",
        "region": "CA, FR",
        "createdOn": 1559806715124,
        "price": [0,0,0],
        "csv": "Some CSV link for Super Jewels Quest",
        "report": "Some report link for Super Jewels Ques",
        "image_url":"https://bluestacksproject.s3.us-east-2.amazonaws.com/Page+1/Dashboard/Row+Copy+2-Row/Thumb/Bitmap.png"
      },
      {
        "id": 3,
        "name": "Garena Free Fire",
        "region": "FR",
        "createdOn": 1624549813000,
        "price": [100,500,900],
        "csv": "Some CSV link for Mole Slayer",
        "report": "Some report link for Mole Slayer",
        "image_url":"https://bluestacksproject.s3.us-east-2.amazonaws.com/Page+1/Dashboard-2/Row+Copy+3-Row/Thumb/Bitmap.png"
      },
      {
        "id": 4,
        "name": "MORTAL KOMBAT",
        "region": "JP",
        "createdOn": 1625761271000,
        "price": [100,500,900],
        "csv": "Some CSV link for Mancala Mix",
        "report": "Some report link for Mancala Mix",
        "image_url":"https://bluestacksproject.s3.us-east-2.amazonaws.com/Page+1/Dashboard-2/Row+Copy+4-Row/Thumb/Bitmap.png"
      },
      {
        "id": 5,
        "name": "Need for speed No Limits",
        "region": "JP",
        "createdOn": 1567093813000,
        "price": [100,500,900],
        "csv": "Some CSV link for Mancala Mix",
        "report": "Some report link for Mancala Mix",
        "image_url":"https://bluestacksproject.s3.us-east-2.amazonaws.com/Page+1/Dashboard-2/Row+Copy+6-Row/Thumb/Bitmap.png"
      },
      {
        "id": 6,
        "name": "Shadow Fight 3",
        "region": "JP",
        "createdOn": 1626106871000,
        "price": [100,500,900],
        "csv": "Some CSV link for Mancala Mix",
        "report": "Some report link for Mancala Mix",
        "image_url":"https://bluestacksproject.s3.us-east-2.amazonaws.com/Page+1/Dashboard-2/Row+Copy+7-Row/Thumb/Bitmap.png"
      },
      {
        "id": 7,
        "name": "Summoners War",
        "region": "JP",
        "createdOn": 1625761271000,
        "price": [200,400,700],
        "csv": "Some CSV link for Mancala Mix",
        "report": "Some report link for Mancala Mix",
        "image_url":"https://bluestacksproject.s3.us-east-2.amazonaws.com/Page+1/Dashboard/Row+Copy-Row/Thumb/Bitmap.png"
      },
      {
        "id": 8,
        "name": "PUBG MOBILE",
        "region": "JP",
        "createdOn": 1625934071000,
        "price": [300,800,1200],
        "csv": "Some CSV link for Mancala Mix",
        "report": "Some report link for Mancala Mix",
        "image_url":"https://bluestacksproject.s3.us-east-2.amazonaws.com/Page+1/Dashboard/Row+Copy+5-Row/Thumb/Bitmap.png"
      }
    ]
  };
  server.get("/api/campaigns", list);
};

export default server;
