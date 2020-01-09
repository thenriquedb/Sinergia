export default {
  rooms: {
    default: [
      {
        name: 'Lampâda',
        icon: require('../assets/icons/default/lamp.svg'),
        description: 'Evite acender Lâmpadas durante o dia, utilize a iluminação natural.            ',

        models: [
          {
            name: 'Lâmpada incandescente - 60W',
            power: 60,
            description:
              'Dê preferência a Lâmpadas fluorescentes, além de consumir menos energia, também duram mais tempo.          ',
          },
          {
            name: 'Lâmpada incandescente - 100W',
            power: 100,
            description:
              'Dê preferência a Lâmpadas fluorescentes, além de consumir menos energia, também duram mais tempo.          ',
          },
          {
            name: 'Lâmpada fluorescente - 20W',
            power: 20,
            description:
              'Evite acender Lâmpadas durante o dia, utilize a iluminação natural.',
          },
          {
            name: 'Lâmpada fluorescente - 40W',
            power: 40,
            description:
              'Evite acender Lâmpadas durante o dia, utilize a iluminação natural.',
          },
          {
            name: 'Lâmpada LED - 6W',
            power: 6,
            description: 'Lorem Ipsulum Dolor',
          },
          {
            name: 'Lâmpada LED - 10W',
            power: 10,
            description: 'Lorem Ipsulum Dolor',
          },
          {
            name: 'Lâmpada LED - 12W',
            power: 12,
            description: 'Lorem Ipsulum Dolor',
          },
          {
            name: 'Lâmpada LED - 18W',
            power: 18,
            description: 'Lorem Ipsulum Dolor',
          },
        ],
      },
    ],

    bedroom: [
      {
        name: 'Computador',
        icon: require('../assets/icons/bedroom/computer.svg'),
        models: [
          {
            name: 'Computador',
            power: 200,
            description:
              'Pesquise modelos mais econômicos e evite deixar ligado sem necessidade.            ',
          },
        ],
      },
      {
        name: 'Telefone Fixo',
        icon: require('../assets/icons/bedroom/phone.svg'),
        models: [
          {
            name: 'Telefone Fixo',
            power: 5,
            description:
              '',
          },
        ],
      },
      {
        name: 'Notebook',
        icon: require('../assets/icons/bedroom/notebook.svg'),
        models: [
          {
            name: 'Notebook',
            power: 45,
            description:
              'Pesquise modelos mais econômicos e evite deixar ligado sem necessidade.            ',
          },
        ],

      },
      {
        name: 'Ar condicionado',
        icon: require('../assets/icons/bedroom/air-conditioner.svg'),
        models: [
          {
            name: 'Ar condicionado (7.500 BTU) 1000W',
            power: 1000,
            description:
              'Evite instalar o aparelho em locais com incidência de raios solares. Isso exige maior consumo para esfriar.',
          },
          {
            name: 'Ar condicionado (10.000 BTU) 1350W',
            power: 1350,
            description:
              'Evite instalar o aparelho em locais com incidência de raios solares. Isso exige maior consumo para esfriar.',
          },
          {
            name: 'Ar condicionado (15.000 BTU) 2000W',
            power: 2000,
            description:
              'Evite instalar o aparelho em locais com incidência de raios solares. Isso exige maior consumo para esfriar.',
          },
        ],
      },
      {
        name: 'Carregador de celular',
        icon: require('../assets/icons/bedroom/phone-charger.svg'),
        models: [
          {
            name: 'Carregador de celular - 10W',
            power: 10,
            description:
              'Retire da tomada quando o aparelho já estiver com a carga completa.',
          },
          {
            name: 'Carregador de celular - 18W',
            power: 18,
            description:
              'Retire da tomada quando o aparelho já estiver com a carga completa.',
          },
        ],
      },
      {
        name: 'Impressora',
        icon: require('../assets/icons/bedroom/printer.svg'),
        models: [
          {
            name: 'Impressora',
            power: 25,
            description:
              'Evite deixar acessórios do computador ligados sem necessidade.',
          },
        ],
        icon: '',
      },
      {
        name: 'Micro system',
        icon: require('../assets/icons/bedroom/microsystem.svg'),
        models: [
          {
            name: 'Micro system',
            power: 25,
            description:
              'Os equipamentos que ficam no modo stand-by podem prejudicar a economia de energia, pois continuam consumindo eletricidade.',
          },
        ],
      },

      {
        name: 'Televisão',
        icon: require('../assets/icons/bedroom/tv.svg'),
        models: [
          {
            name: 'Televisão CRT (20" a 29") - 100W',
            power: 100,
            description:
              'Desligue da tomada quando não for mais assistir, pois o stand-by consome energia.',
          },
          {
            name: 'Televisão LED - 100W',
            power: 100,
            description:
              'Desligue da tomada quando não for mais assistir, pois o stand-by consome energia.',
          },
          {
            name: 'Televisão LCD - 200W',
            power: 200,
            description:
              'Desligue da tomada quando não for mais assistir, pois o stand-by consome energia.',
          },
          {
            name: 'Televisão de plasma - 300W',
            power: 300,
            description:
              'Desligue da tomada quando não for mais assistir, pois o stand-by consome energia.',
          },
        ],
      },
      {
        name: 'Ventilador',
        icon: require('../assets/icons/bedroom/fan.svg'),
        models: [
          {
            name: 'Ventilador grande',
            power: 200,
            description:
              'Mantenha hélices e grades limpas para facilitar a circulação do ar',
          },
          {
            name: 'Ventilador pequeno',
            power: 150,
            description:
              'Mantenha hélices e grades limpas para facilitar a circulação do ar',
          },
        ],
      },
      {
        name: 'Video Game',
        icon: require('../assets/icons/bedroom/videogame.svg'),
        models: [
          {
            name: 'PlayStation 2',
            power: 25,
            description:
              'Os equipamentos que ficam no modo stand-by podem prejudicar a economia de energia, pois continuam consumindo eletricidade.',
          },
          {
            name: 'PlayStation 3',
            power: 200,
            description:
              'Os equipamentos que ficam no modo stand-by podem prejudicar a economia de energia, pois continuam consumindo eletricidade.',
          },
          {
            name: 'PlayStation 4',
            power: 165,
            description:
              'Os equipamentos que ficam no modo stand-by podem prejudicar a economia de energia, pois continuam consumindo eletricidade.',
          },
          {
            name: 'Nintendo Switch ',
            power: 18,
            description:
              'Os equipamentos que ficam no modo stand-by podem prejudicar a economia de energia, pois continuam consumindo eletricidade.',
          },

          {
            name: 'Nintendo Wii ',
            power: 40,
            description:
              'Os equipamentos que ficam no modo stand-by podem prejudicar a economia de energia, pois continuam consumindo eletricidade.',
          },
          {
            name: 'Xbox 360',
            power: 135,
            description:
              'Os equipamentos que ficam no modo stand-by podem prejudicar a economia de energia, pois continuam consumindo eletricidade.',
          },
          {
            name: 'Xbox One',
            power: 120,
            description:
              'Os equipamentos que ficam no modo stand-by podem prejudicar a economia de energia, pois continuam consumindo eletricidade.',
          },
        ],
      },
      {
        name: 'DVD',
        icon: require('../assets/icons/bedroom/dvd.svg'),
        models: [
          {
            name: 'DVD',
            power: 10,
            description:
              'Os equipamentos que ficam no modo stand-by podem prejudicar a economia de energia, pois continuam consumindo eletricidade.',
          },
        ],
      },
      {
        name: 'Home theater',
        icon: require('../assets/icons/bedroom/speaker.svg'),
        models: [
          {
            name: 'Home theater',
            power: 350,
            description:
              'Os equipamentos que ficam no modo stand-by podem prejudicar a economia de energia, pois continuam consumindo eletricidade.',
            icon: '',
          },
        ],
      },
    ],

    kitchen: [{
      name: 'Batedeira',
      models: [
        {
          name: 'Batedeira',
          icon: require('../assets/icons/kitchen/blender.svg'),
          power: 180,
          description:
            'Muito utilizado em nossas cozinhas, o liquidificador é um aparelho que consome pouca energia elétrica. ',
        },
      ],
    },
    {
      name: 'Cafeteira',
      icon: require('../assets/icons/kitchen/coffemachine.svg'),
      models: [
        {
          name: 'Cafeteira',
          power: 1000,
          description:
            ' ',
        },
      ],
    },
    {
      name: 'Exaustor Fogão',
      icon: require('../assets/icons/kitchen/exaust.svg'),
      models: [
        {
          name: 'Exaustor Fogão',
          power: 170,
          description:
            ' ',
        },
      ],
    },
    {
      name: 'Fogão elétrico',
      icon: require('../assets/icons/kitchen/cooker.svg'),
      models: [
        {
          name: 'Fogão elétrico',
          power: 1500,
          description:
            ' ',
        },
      ],
    },
    {
      name: 'Forno elétrico',
      icon: require('../assets/icons/kitchen/forno.svg'),
      models: [
        {
          name: 'Forno elétrico',
          power: 1500,
          description:
            ' ',
        },
      ],
    },
    {
      name: 'Freezer',
      icon: require('../assets/icons/kitchen/freezer.svg'),
      models: [
        {
          name: 'Freezer',
          power: 200,
          description:
            'Instalar longe das fontes de calor e de preferência em local ventilado',
        },
      ],
    },
    {
      name: 'Frigobar',
      icon: require('../assets/icons/kitchen/frigobar.svg'),
      models: [
        {
          name: 'Frigobar',
          power: 70,
          description:
            '',
        },
      ],
    },
    {
      name: 'Lavadora de louça',
      icon: require('../assets/icons/kitchen/dishwasher.svg'),
      models: [
        {
          name: 'Lavadora de louça',
          power: 1400,
          description:
            'Economize água e energia elétrica lavando de uma só vez, a quantidade máxima de louça indicada pelo fabricante.',
        },
      ],
    },
    {
      name: 'Liquidificador',
      icon: require('../assets/icons/kitchen/mixer.svg'),
      models: [
        {
          name: 'Liquidificador',
          power: 300,
          description:
            'Economize água e energia elétrica lavando de uma só vez, a quantidade máxima de louça indicada pelo fabricante.',
        },
      ],
    },
    {
      name: 'Microondas',
      icon: require('../assets/icons/kitchen/microwave.svg'),
      models: [
        {
          name: 'Microondas',
          power: 1500,
          description:
            'Use corretamente a potência para aquecer a comida, para não usar mais que o tempo necessário.',
        },
      ],
    },
    {
      name: 'Refrigerador',
      icon: require('../assets/icons/kitchen/geladeira.svg'),
      models: [
        {
          name: 'Refrigerador 1 porta',
          power: 80,
          description:
            'Não deixe a porta muito tempo aberta e evite guardar panelas quentes.',
        },
        {
          name: 'Refrigerador 2 portas',
          power: 125,
          description:
            'Não deixe a porta muito tempo aberta e evite guardar panelas quentes.',
        },
        {
          name: 'Refrigerador antigo (+ de 10 anos) portas',
          power: 280,
          description:
            'Não deixe a porta muito tempo aberta e evite guardar panelas quentes.',
        },
        {
          name: 'Refrigerador com dispenser (água/gelo) portas',
          power: 380,
          description:
            'Não deixe a porta muito tempo aberta e evite guardar panelas quentes.',
        },
      ],
    },
    {
      name: 'Sanduicheira',
      icon: require('../assets/icons/kitchen/sandwich.svg'),
      models: [
        {
          name: 'Sanduicheira',
          power: 750,
          description:
            '',
        },
      ],
    },
    ],

    externalArea: [
      {
        name: 'Boiler',
        icon: require('../assets/icons/externalArea/boiler.svg'),
        models: [
          {
            name: 'Boiler 100L',
            power: 2030,
            description:
              '',
          },
          {
            name: 'Boiler 200 a 500L',
            power: 3000,
            description:
              '',
          },
          {
            name: 'Boiler 200 a 500L com coletor solor',
            power: 2030,
            description:
              '',
          },
        ],
      },
      {
        name: 'Sauna',
        icon: require('../assets/icons/externalArea/sauna.svg'),
        models: [
          {
            name: 'Sauna',
            power: 15000,
            description:
              '',
          },
        ],
      },
      {
        name: 'Bomba d\'água',
        icon: require('../assets/icons/externalArea/plumb.svg'),
        models: [
          {
            name: 'Bomba d\'água 1/4 CV',
            power: 335,
            description:
              '',
          },
          {
            name: 'Bomba d\'água 1/2 CV',
            power: 615,
            description:
              '',
          },
          {
            name: 'Bomba d\'água 3/4 CV',
            power: 850,
            description:
              '',
          },
          {
            name: 'Bomba d\'água 1 CV',
            power: 1055,
            description:
              '',
          },
        ],
      },
      {
        name: 'Bomba de piscina',
        icon: require('../assets/icons/externalArea/water-pump.svg'),
        models: [
          {
            name: 'Bomba de piscina',
            power: 500,
            description:
              '',
          },
        ],
      },
      {
        name: 'Churrasqueira elétrica',
        icon: require('../assets/icons/externalArea/grill.svg'),
        models: [
          {
            name: 'Churrasqueira elétrica',
            power: 3800,
            description:
              '',
          },
        ],
      },
      {
        name: 'Cortador de grama',
        icon: require('../assets/icons/externalArea/lawn-mower.svg'),
        models: [
          {
            name: 'Cortador de grama',
            power: 600,
            description:
              '',
          },
        ],
      },
    ],

    bathroom: [
      {
        name: 'Chuveiro',
        icon: require('../assets/icons/bathroom/shower.svg'),
        models: [
          {
            name: 'Chuveiro elétrico pequeno',
            power: 3500,
            description:
              'Nos meses quentes, ajuste a chave do chuveiro para a posição verão.',
          },
          {
            name: 'Chuveiro elétrico médio',
            power: 4500,
            description:
              'Nos meses quentes, ajuste a chave do chuveiro para a posição verão.',
          },
          {
            name: 'Chuveiro elétrico grande',
            power: 5500,
            description:
              'Nos meses quentes, ajuste a chave do chuveiro para a posição verão.',
          },
        ],
      },
      {
        name: 'Depilador',
        icon: require('../assets/icons/bathroom/depilador.svg'),
        models: [
          {
            name: 'Depilador',
            power: 150,
            description:
              '',
          },
        ],
      },

      {
        name: 'Secador de cabelo',
        icon: require('../assets/icons/bathroom/hairdryer.svg'),
        models: [
          {
            name: 'Secador pequeno de cabelo',
            power: 800,
            description:
              '',
          },
          {
            name: 'Secador grande de cabelo',
            power: 1800,
            description:
              '',
          },
        ],
      },
      {
        name: 'Torneira elétrica',
        icon: require('../assets/icons/bathroom/sink.svg'),
        models: [
          {
            name: 'Torneira elétrica',
            power: 4400,
            description:
              'Evite ligá-la no verão quando a água, em geral, é mais quente.',
          },
        ],
      },
      {
        name: 'Banheira',
        icon: require('../assets/icons/bathroom/bathtub.svg'),
        models: [
          {
            name: 'Banheira de hidromassagem',
            power: 6600,
            description:
              '',
          },
        ],
      },
    ],

    serviceArea: [
      {
        name: 'Aspirador de pó',
        icon: require('../assets/icons/serviceArea/vacuum-cleaner.svg'),
        models: [
          {
            name: 'Aspirador de pó',
            power: 600,
            description:
              '',
          },
        ],
      },
      {
        name: 'Máquina de costura',
        icon: require('../assets/icons/serviceArea/sewing-machine.svg'),
        models: [
          {
            name: 'Maquina de costura',
            power: 100,
            description:
              '',
          },
        ],
      },
      {
        name: 'Ferro de passar',
        icon: require('../assets/icons/serviceArea/flatiron.svg'),
        models: [
          {
            name: 'Ferro de passar',
            power: 1000,
            description:
              'Ao desligar o ferro, aproveite o seu calor para passar as roupas mais leves.',
          },
        ],
      },
      {
        name: 'Lavadora de roupa',
        icon: require('../assets/icons/serviceArea/washing-machine.svg'),
        models: [
          {
            name: 'Lavadora de roupa',
            power: 500,
            description:
              'Procure usar toda a capacidade em uma mesma lavagem, evitando ligá-la muitas vezes.',
          },
        ],
      },
      {
        name: 'Secadora de roupa',
        icon: require('../assets/icons/serviceArea/secadora.svg'),
        models: [
          {
            name: 'Secadora de roupa',
            power: 3500,
            description:
              '',
          },
        ],
      },
      {
        name: 'Tanquinho',
        icon: require('../assets/icons/serviceArea/tanquinho.svg'),
        models: [
          {
            name: 'Tanquinho',
            power: 270,
            description:
              'Procure usar toda a capacidade em uma mesma lavagem, evitando ligá-lo muitas vezes.',
          },
        ],
      },
    ],
  },
};
