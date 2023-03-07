// export const filterData = [
//   {
//     items: [
//       {name: 'Comprar', value: 'pra-compra'},
//       {name: 'Venda', value: 'pra-venda'}
//     ],
//     placeholder: 'Modalidade',
//     queryName: 'modalidade',
//   }, 
//   {
//     items: [
//       {name: 'Apartamento', value: 'apartamento'},
//       {name: 'Casa', value: 'casa'},
//       {name: 'Vila', value: 'Vila'},
//       {name: 'Quarto', value: 'quarto'},
//       {name: 'Terreno', value: 'terreno'},
//       {name: 'Escritório', value: 'escritório'},
//       {name: 'Loja', value: 'loja'},
//       {name: 'Hotel', value: 'hotel'},
//     ],
//     placeholder: 'Tipo de propriedade',
//     queryName: 'categoryExternalID'
//   }
//   , 
//   {
//     items: [
//       {name: '10,000', value: '10000'},
//       {name: '20,000', value: '20000'},
//       {name: '30,000', value: '30000'},
//       {name: '40,000', value: '40000'},
//       {name: '50,000', value: '50000'},
//       {name: '60,000', value: '60000'},
//       {name: '85,000', value: '85000'},
//     ],
//     placeholder: 'Preço minimo(kz)',
//     queryName: 'minPrice'
//   }
//   , 
//   {
//     items: [
//       {name: '50,000', value: '50000'},
//       {name: '60,000', value: '60000'},
//       {name: '85,000', value: '85000'},
//       {name: '110,000', value: '110000'},
//       {name: '210,000', value: '210000'},
//       {name: '310,000', value: '310000'},
//       {name: '910,000', value: '910000'},
//     ],
//     placeholder: 'Preço maximo(Kz)',
//     queryName: 'maxPrice'
//   }
//   , 
//   {
//     items: [
//       {name: '10000', value: '10000'},
//       {name: '20000', value: '20000'},
//       {name: '30000', value: '30000'},
//       {name: '40000', value: '40000'},
//       {name: '50000', value: '50000'},
//       {name: '60000', value: '60000'},
//       {name: '85000', value: '85000'},
//     ],
//     placeholder: 'Area maxima(m2)',
//     queryName: 'areaMax'
//   }
//   , 
//   {
//     items: [
//       {name: '1', value: '1'},
//       {name: '2', value: '2'},
//       {name: '3', value: '3'},
//       {name: '4', value: '4'},
//       {name: '5', value: '5'},
//       {name: '6', value: '6'},
//       {name: '7', value: '7'},
//     ],
//     placeholder: 'Quaros',
//     queryName: 'roomsMin'
//   }
//   , 
//   {
//     items: [
//       {name: '1', value: '1'},
//       {name: '2', value: '2'},
//       {name: '3', value: '3'},
//       {name: '4', value: '4'},
//       {name: '5', value: '5'},
//       {name: '6', value: '6'},
//       {name: '7', value: '7'},
//     ],
//     placeholder: 'Banheiros',
//     queryName: 'bathsMin'
//   }
// ];

// export const getFilterValues = (filterData) => {
//   const {
//     modalidade,
//     categoryExternalID,
//     minPrice,
//     maxPrice,
//     areaMax,
//     roomsMin,
//     bathsMin
//   } = filterData;

//   const values = [
//     {
//       name: 'modalidade',
//       value: modalidade
//     },
//     {
//       name: 'categoryExternalID',
//       value: categoryExternalID
//     },
//     {
//       name: 'minPrice',
//       value: minPrice
//     },
//     {
//       name: 'maxPrice',
//       value: maxPrice
//     },
//     {
//       name: 'areaMax',
//       value: areaMax
//     },
//     {
//       name: 'roomsMin',
//       value: roomsMin
//     },
//     {
//       name: 'bathsMin',
//       value: bathsMin
//     }
//   ]
// }


export const selectData = [

  {
    items: [
      { name: 'Apartamento' , value: 'Apartamento'},
      { name: 'Casa' , value: 'Casa'},
      { name: 'Hoteis' , value: 'Hoteis'},
      { name: 'Escritório' , value: 'Escritório'},
      { name: 'Loja' , value: 'Loja'},
      { name: 'Terreno' , value: 'Terreno'},
    ],
    placeholder: 'Imoveis',
    queryName: 'imoveis',
  },
];

export const getSelectData = (selectData) => {
  const {imoveis} = selectData;
  const values = [
    
    {
      name: 'Imoveis',
      value: imoveis
    }
  ]
  return values;
}

