export const selectData = [
  // {
  //   items: [
  //     { name: 'Apartamento' , value: 'Apartamento'},
  //     { name: 'Casa' , value: 'Casa'},
  //     { name: 'Hoteis' , value: 'Hoteis'},
  //     { name: 'Escritório' , value: 'Escritório'},
  //     { name: 'Loja' , value: 'Loja'},
  //     { name: 'Terreno' , value: 'Terreno'},
  //   ],
  //   placeholder: 'Modalidade',
  //   queryName: 'Modalidade',
  // },
  {
    items: [
      { name: 'Venda' , value: 'Venda'},
      { name: 'Aluguer' , value: 'Aluguer'}
    ],
    placeholder: 'Modalidade',
    queryName: 'Modalidade',
  }
];

export const getSelectData = (selectData) => {
  const {Modalidade} = selectData;
  const values = [
    {
      name: 'Modalidade',
      value: Modalidade
    }
  ]
  return values;
}