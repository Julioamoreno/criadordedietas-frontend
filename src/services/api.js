export function loadLists() {
    return [
      { 
        title: 'Café da manhã', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Ovos mexidos',
            labels: ['#7159c1'],
            proteina: '10',
            carboidrato: 10,
            gordura: ''
          },
          {
            id: 2,
            content: 'Leite',
            labels: ['#7159c1'],
            proteina: '5',
            carboidrato: '2',
            gordura: '5'
          },
          {
            id: 3,
            content: 'Queijo',
            labels: ['#7159c1'],
            proteina: '3',
            carboidrato: '3',
            gordura: '1'
          },
          {
            id: 4,
            content: 'Pedaço de Mamão',
            labels: ['#54e1f7'],
            proteina: '3',
            carboidrato: '4',
            gordura: '2'
          },
          {
            id: 5,
            content: 'Pão',
            labels: ['#54e1f7'],
            proteina: '2',
            carboidrato: '25',
            gordura: '2'
          },
        ]
      },
      { 
        title: 'Almoço', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Frango',
            labels: [],
            proteina: '28',
            carboidrato: '11',
            gordura: '7'
          },
          {
            id: 7,
            content: 'Arroz',
            labels: [],
            proteina: '12',
            carboidrato: '34',
            gordura: '4'
          }
        ]
      },
      { 
        title: 'Café da tarde', 
        creatable: false,
        cards: [
          {
            id: 8,
            content: 'Queijo',
            labels: ['#7159c1'],
            proteina: '12',
            carboidrato: '2',
            gordura: '4'
          },
          {
            id: 9,
            content: 'Suco de laranja',
            labels: ['#54e1f7'],
            proteina: '4',
            carboidrato: '5',
            gordura: '1'
          },
          {
            id: 10,
            content: 'Ricota',
            labels: [],
            proteina: '13',
            carboidrato: '3',
            gordura: '4'
          }
        ]
      },
      { 
        title: 'Jantar', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 11,
            content: 'Peixe grelhado',
            labels: [],
            proteina: '4',
            carboidrato: '5',
            gordura: '1'
          },
          {
            id: 12,
            content: 'Ovo',
            labels: ['#54e1f7'],
            proteina: '6',
            carboidrato: '4',
            gordura: '4'
          },
          {
            id: 13,
            content: 'Salada',
            labels: ['#7159c1'],
            proteina: '2',
            carboidrato: '3',
            gordura: '1'
          }
        ]
      },
    ];
  }