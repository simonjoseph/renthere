export const selectData = [
  {
    items: [
      { name: 'Aluguer' , value: 'Aluguer'},
      { name: 'Comprar' , value: 'Comprar'}
    ],
    placeholder: 'Modalidade',
    queryName: 'Modalidade',
  },
  // {
  //   items: [
  //     { name: 'Apartamento' , value: 'Apartamento'},
  //     { name: 'Casa' , value: 'Casa'},
  //     { name: 'Hoteis' , value: 'Hoteis'},
  //     { name: 'Escritório' , value: 'Escritório'},
  //     { name: 'Loja' , value: 'Loja'},
  //     { name: 'Terreno' , value: 'Terreno'},
  //   ],
  //   placeholder: 'Imoveis',
  //   queryName: 'imoveis',
  // },
];

export const getSelectData = (selectData) => {
  const {Modalidade} = selectData;
  const values = [
    {
      name: 'Modalidade',
      value: Modalidade
    },
    // {
    //   name: 'Imoveis',
    //   value: imoveis
    // }imoveis
  ]
  return values;
}