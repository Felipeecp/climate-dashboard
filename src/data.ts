export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Graficos",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Sensores",
        url: "/sensor",
        icon: "sensor.svg",
      },
      {
        id: 3,
        title: "Locais",
        url: "/locais",
        icon: "map.svg",
      },
      {
        id: 4,
        title: "Avisos",
        url: "/avisos",
        icon: "notice.svg",
      },
    ],
  },
  // {
  //   id: 2,
  //   title: "lists",
  //   listItems: [
  //     {
  //       id: 1,
  //       title: "Users",
  //       url: "/users",
  //       icon: "user.svg",
  //     },
  //     {
  //       id: 2,
  //       title: "Products",
  //       url: "/products",
  //       icon: "product.svg",
  //     },
  //     {
  //       id: 3,
  //       title: "Orders",
  //       url: "/orders",
  //       icon: "order.svg",
  //     },
  //     {
  //       id: 4,
  //       title: "Posts",
  //       url: "/posts",
  //       icon: "post2.svg",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "general",
  //   listItems: [
  //     {
  //       id: 1,
  //       title: "Elements",
  //       url: "/",
  //       icon: "element.svg",
  //     },
  //     {
  //       id: 2,
  //       title: "Notes",
  //       url: "/",
  //       icon: "note.svg",
  //     },
  //     {
  //       id: 3,
  //       title: "Forms",
  //       url: "/",
  //       icon: "form.svg",
  //     },
  //     {
  //       id: 4,
  //       title: "Calendar",
  //       url: "/",
  //       icon: "calendar.svg",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "Maintenance",
  //   listItems: [
  //     {
  //       id: 1,
  //       title: "Settings",
  //       url: "/",
  //       icon: "setting.svg",
  //     },
  //     {
  //       id: 2,
  //       title: "Backups",
  //       url: "/",
  //       icon: "backup.svg",
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "analytics",
  //   listItems: [
  //     {
  //       id: 1,
  //       title: "Charts",
  //       url: "/",
  //       icon: "chart.svg",
  //     },
  //     {
  //       id: 2,
  //       title: "Logs",
  //       url: "/",
  //       icon: "log.svg",
  //     },
  //   ],
  // },
];

export const topDealUsers = [
  {
    id: 1,
    img: "sensor_o.svg",
    username: "Sensor A",
    email: "São Luís, Fatima - MA",
    amount: "3 dias",
  },
  {
    id: 2,
    img: "sensor_o.svg",
    username: "Sensor B",
    email: "São Luís, Bequimão - MA",
    amount: "6 dias",
  },
  {
    id: 3,
    img: "sensor_o.svg",
    username: "Sensor C",
    email: "São Luís, Coatrac - MA",
    amount: "10 dias",
  },
  {
    id: 4,
    img: "sensor_o.svg",
    username: "Sensor D",
    email: "Fortaleza, - CE",
    amount: "5 dias",
  },
  {
    id: 5,
    img: "sensor_off.svg",
    username: "Sensor E",
    email: "Aracaju - SE",
    amount: "20 dias",
  },
  {
    id: 6,
    img: "sensor_o.svg",
    username: "Sensor F",
    email: "Belo Horizonte - MG",
    amount: "35 dias",
  },
  {
    id: 7,
    img: "sensor_off.svg",
    username: "Sensor G",
    email: "São Paulo - SP",
    amount: "40 dias",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "https://raw.githubusercontent.com/Felipeecp/climate-dashboard/582797617508f5a3f6a1d2bb9af6135cdfa35815/climate-change.svg",
  title: "Temperatura - Sensor A",
  number: "31 ºC",
  dataKey: "temperatura",
  percentage: 45,
  chartData: [
    { name: "Sun", temperatura: 27 },
    { name: "Mon", temperatura: 29 },
    { name: "Tue", temperatura: 30 },
    { name: "Wed", temperatura: 29 },
    { name: "Thu", temperatura: 30 },
    { name: "Fri", temperatura: 27 },
    { name: "Sat", temperatura: 33 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "https://raw.githubusercontent.com/Felipeecp/climate-dashboard/582797617508f5a3f6a1d2bb9af6135cdfa35815/climate-change.svg",
  title: "Umidade - Sensor A",
  number: "68%",
  dataKey: "umidade",
  percentage: 21,
  chartData: [
    { name: "Sun", umidade: 65 },
    { name: "Mon", umidade: 68 },
    { name: "Tue", umidade: 70 },
    { name: "Wed", umidade: 65 },
    { name: "Thu", umidade: 65 },
    { name: "Fri", umidade: 67 },
    { name: "Sat", umidade: 68 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "https://raw.githubusercontent.com/Felipeecp/climate-dashboard/582797617508f5a3f6a1d2bb9af6135cdfa35815/climate-change.svg",
  title: "Temperatura - Sensor C",
  number: "22 ºC",
  dataKey: "temperatura",
  percentage: -12,
  chartData: [
    { name: "Sun", temperatura: 27 },
    { name: "Mon", temperatura: 29 },
    { name: "Tue", temperatura: 30 },
    { name: "Wed", temperatura: 29 },
    { name: "Thu", temperatura: 30 },
    { name: "Fri", temperatura: 27 },
    { name: "Sat", temperatura: 33 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "https://raw.githubusercontent.com/Felipeecp/climate-dashboard/582797617508f5a3f6a1d2bb9af6135cdfa35815/climate-change.svg",
  title: "Umidade - Sensor B",
  number: "65%",
  dataKey: "umidade",
  percentage: -12,
  chartData: [
    { name: "Sun", umidade: 65 },
    { name: "Mon", umidade: 68 },
    { name: "Tue", umidade: 70 },
    { name: "Wed", umidade: 65 },
    { name: "Thu", umidade: 65 },
    { name: "Fri", umidade: 67 },
    { name: "Sat", umidade: 68 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Hubbard",
    firstName: "Eula",
    email: "kewez@@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Manning",
    firstName: "Stella",
    email: "comhuhmit@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Greer",
    firstName: "Mary",
    email: "ujudokon@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williamson",
    firstName: "Mildred",
    email: "tinhavabe@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sharp",
    firstName: "Jeremy",
    email: "vulca.eder@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lowe",
    firstName: "Christina",
    email: "reso.bilic@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dean",
    firstName: "Garrett",
    email: "codaic@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Parsons",
    firstName: "Leah",
    email: "uzozor@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Reid",
    firstName: "Elnora",
    email: "tuhkabapu@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dunn",
    firstName: "Gertrude",
    email: "gibo@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williams",
    firstName: "Mark",
    email: "tic.harvey@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Cruz",
    firstName: "Charlotte",
    email: "ceuc@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    firstName: "Sara",
    email: "bafuv@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    firstName: "Eric",
    email: "ubi@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
];

export const products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    producer: "Dell",
    price: "$499.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    producer: "Samsung",
    price: "$999.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    producer: "Apple",
    price: "$799.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "$39.99",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "$59.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "$119.49",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "$899.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "$970.49",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    producer: "Acer",
    price: "$599.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
];

export const singleUser = {
  id: 1,
  title: "John Doe",
  img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    username: "Johndoe99",
    fullname: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "John Doe added 3 items into their wishlist",
      time: "1 week ago",
    },
    {
      text: "John Doe purchased Sony Bravia KD-32w800",
      time: "2 weeks ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "1 month ago",
    },
    {
      text: "John Doe added 1 items into their wishlist",
      time: "1 month ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "2 months ago",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};

export const pieChartData = [
  { name: "Quente e Seco", value: 22, color: "#0088FE" },
  { name: "Quente e Úmido", value: 30, color: "#00C49F" },
  { name: "Frio e Seco", value: 12, color: "#FFBB28" },
  { name: "Frio e Úmido", value: 7, color: "#FF8042" },
];

//adição de dados para exibir estaticamente
export const singleSensor =
  {
    title: "Sensor",
    img: "https://www.saravati.com.br/media/catalog/product/cache/ff61517d26ace703648229d56c081b52/1/5/156519c3ae.jpg",
    info: {
      codWMO: "Ps5SDF1156d",
      Cidade: "São Luís",
      Estado:"MA",
      "Data de criação": "27/10/2023",
      latitude:"-28.513352",
      longitude:"-53.98947",
      altitude:"389",
    },
    chart: {
      dataKey: [
        { name: "temp", color: "#82ca9d" },
        { name: "humidity", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          temp: 37,
          humidity: 80,
        },
        {
          name: "Mon",
          temp: 38,
          humidity: 70,
        },
        {
          name: "Tue",
          temp: 35,
          humidity: 85,
        },
        {
          name: "Wed",
          temp: 29,
          humidity: 65,
        },
        {
          name: "Thu",
          temp: 42,
          humidity: 67,
        },
        {
          name: "Fri",
          temp: 36,
          humidity: 80,
        },
        {
          name: "Sat",
          temp: 35,
          humidity: 77,
        },
      ],
    },
    activities: [
      {
        text: "36 °C - 75%",
        time: "3 day ago",
      },
      {
        text: "35 °C - 67%",
        time: "1 week ago",
      },
      {
        text: "42 °C - 85%",
        time: "2 weeks ago",
      },
      {
        text: "37 °C - 60%",
        time: "1 month ago",
      },
      {
        text: "36 °C - 77%",
        time: "1 month ago",
      },
      {
        text: "40 °C - 80%",
        time: "2 months ago",
      },
    ],
  };

//adição de dados para exibir estaticamente (array)
// export const singleSensor = 
// [
//   {
//     id: 1,
//     title: "Sensor A",
//     img: "https://www.saravati.com.br/media/catalog/product/cache/ff61517d26ace703648229d56c081b52/1/5/156519c3ae.jpg",
//     info: {
//       sensorId: "Ps5SDF1156d",
//       city: "Bairro de Fátima - São Luís",
//       state:"MA",
//       login: "27/10/2023",
      
//     },
//     chart: {
//       dataKey: [
//         { name: "temp", color: "#82ca9d" },
//         { name: "humidity", color: "#8884d8" },
//       ],
//       data: [
//         {
//           name: "Sun",
//           temp: 37,
//           humidity: 80,
//         },
//         {
//           name: "Mon",
//           temp: 38,
//           humidity: 70,
//         },
//         {
//           name: "Tue",
//           temp: 35,
//           humidity: 85,
//         },
//         {
//           name: "Wed",
//           temp: 29,
//           humidity: 65,
//         },
//         {
//           name: "Thu",
//           temp: 42,
//           humidity: 67,
//         },
//         {
//           name: "Fri",
//           temp: 36,
//           humidity: 80,
//         },
//         {
//           name: "Sat",
//           temp: 35,
//           humidity: 77,
//         },
//       ],
//     },
//     activities: [
//       {
//         text: "36 °C - 75%",
//         time: "3 day ago",
//       },
//       {
//         text: "35 °C - 67%",
//         time: "1 week ago",
//       },
//       {
//         text: "42 °C - 85%",
//         time: "2 weeks ago",
//       },
//       {
//         text: "37 °C - 60%",
//         time: "1 month ago",
//       },
//       {
//         text: "36 °C - 77%",
//         time: "1 month ago",
//       },
//       {
//         text: "40 °C - 80%",
//         time: "2 months ago",
//       },
//     ],
//   },

//   {
//     id: 2,
//     title: "Sensor B",
//     img: "https://www.makerhero.com/wp-content/uploads/2017/07/1AC01-9-1-min-300x300.jpeg",
//     info: {
//       sensorId: "5S0nN8nxRge",
//       city: "Cohama - São Luís",
//       state:"MA",
//       login: "19/10/2023",

//     },
//     chart: {
//       dataKey: [
//         { name: "temp", color: "#82ca9d" },
//         { name: "humidity", color: "#8884d8" },
//       ],
//       data: [
//         {
//           name: "Sun",
//           temp: 40,
//           humidity: 81,
//         },
//         {
//           name: "Mon",
//           temp: 35,
//           humidity: 70,
//         },
//         {
//           name: "Tue",
//           temp: 35,
//           humidity: 70,
//         },
//         {
//           name: "Wed",
//           temp: 39,
//           humidity: 65,
//         },
//         {
//           name: "Thu",
//           temp: 42,
//           humidity: 62,
//         },
//         {
//           name: "Fri",
//           temp: 34,
//           humidity: 80,
//         },
//         {
//           name: "Sat",
//           temp: 35,
//           humidity: 65,
//         },
//       ],
//     },
//     activities: [
//       {
//         text: "36 °C - 75%",
//         time: "3 day ago",
//       },
//       {
//         text: "35 °C - 67%",
//         time: "1 week ago",
//       },
//       {
//         text: "42 °C - 85%",
//         time: "2 weeks ago",
//       },
//       {
//         text: "37 °C - 60%",
//         time: "1 month ago",
//       },
//       {
//         text: "36 °C - 77%",
//         time: "1 month ago",
//       },
//       {
//         text: "40 °C - 80%",
//         time: "2 months ago",
//       },
//     ],
//   },
// ];
