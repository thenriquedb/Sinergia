export default {
  rooms: {
    default: [
      {
        name: 'Lâmpada',
        icon: {
          dark: require('../assets/icons/default/dark/lamp.png'),
          light: require('../assets/icons/default/light/lamp.png')
        },
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
            description:
              'Evite acender Lâmpadas durante o dia, utilize a iluminação natural.',
          },
          {
            name: 'Lâmpada LED - 10W',
            power: 10,
            description:
              'Evite acender Lâmpadas durante o dia, utilize a iluminação natural.',
          },
          {
            name: 'Lâmpada LED - 12W',
            power: 12,
            description:
              'Evite acender Lâmpadas durante o dia, utilize a iluminação natural.',
          },
          {
            name: 'Lâmpada LED - 18W',
            power: 18,
            description:
              'Evite acender Lâmpadas durante o dia, utilize a iluminação natural.',
          },
          {
            name: 'Personalizado',
            power: 18,
            description:
              'Evite acender Lâmpadas durante o dia, utilize a iluminação natural.',
          }
        ],
      },
    ],

    bedroom: [
      {
        name: 'Computador',
        icon: {
          dark: require('../assets/icons/bedroom/dark/computer.png'),
          light: require('../assets/icons/bedroom/light/computer.png')
        },
        models: [
          {
            name: 'Computador',
            power: 200,
            description:
              'Pesquise modelos mais econômicos e evite deixar ligado sem necessidade.',
          },
          {
            name: 'Personalizado',
            power: 200,
            description:
              'Pesquise modelos mais econômicos e evite deixar ligado sem necessidade.',
          }
        ],
      },
      {
        name: 'Telefone Fixo',
        icon: {
          dark: require('../assets/icons/bedroom/dark/phone.png'),
          light: require('../assets/icons/bedroom/light/phone.png')
        }, models: [
          {
            name: 'Telefone Fixo',
            power: 5,
            description:
              '',
          },
          {
            name: 'Personalizado',
            power: 5,
            description:
              '',
          }
        ],
      },
      {
        name: 'Notebook',
        icon: {
          dark: require('../assets/icons/bedroom/dark/notebook.png'),
          light: require('../assets/icons/bedroom/light/notebook.png')
        },
        models: [
          {
            name: 'Notebook',
            power: 45,
            description:
              'Pesquise modelos mais econômicos e evite deixar ligado sem necessidade.            ',
          },
          {
            name: 'Personalizado',
            power: 45,
            description:
              'Pesquise modelos mais econômicos e evite deixar ligado sem necessidade.',
          }
        ],
      },
      {
        name: 'Ar condicionado',
        icon: {
          dark: require('../assets/icons/bedroom/dark/air-conditioner.png'),
          light: require('../assets/icons/bedroom/light/air-conditioner.png')
        },
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
          {
            name: 'Personalizado',
            power: 1450,
            description:
              'Evite instalar o aparelho em locais com incidência de raios solares. Isso exige maior consumo para esfriar.',
          }
        ],
      },
      {
        name: 'Carregador de celular',
        icon: {
          dark: require('../assets/icons/bedroom/dark/phone-charger.png'),
          light: require('../assets/icons/bedroom/light/phone-charger.png')
        },
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
          {
            name: 'Personalizado',
            power: 14,
            description:
              'Retire da tomada quando o aparelho já estiver com a carga completa.',
          }
        ],
      },
      {
        name: 'Impressora',
        icon: {
          dark: require('../assets/icons/bedroom/dark/printer.png'),
          light: require('../assets/icons/bedroom/light/printer.png')
        },
        models: [
          {
            name: 'Impressora',
            power: 25,
            description:
              'Evite deixar acessórios do computador ligados sem necessidade.',
          },
          {
            name: 'Personalizado',
            power: 25,
            description:
              'Evite deixar acessórios do computador ligados sem necessidade.',
          }
        ],
      },
      {
        name: 'Micro system',
        icon: {
          dark: require('../assets/icons/bedroom/dark/microsystem.png'),
          light: require('../assets/icons/bedroom/light/microsystem.png')
        },
        models: [
          {
            name: 'Micro system',
            power: 25,
            description:
              'Os equipamentos que ficam no modo stand-by podem prejudicar a economia de energia, pois continuam consumindo eletricidade.',
          },
          {
            name: 'Personalizado',
            power: 25,
            description:
              'Os equipamentos que ficam no modo stand-by podem prejudicar a economia de energia, pois continuam consumindo eletricidade.',
          }
        ],
      },

      {
        name: 'Televisão',
        icon: {
          dark: require('../assets/icons/bedroom/dark/tv.png'),
          light: require('../assets/icons/bedroom/light/tv.png')
        },
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
          {
            name: 'Personalizado',
            power: 350,
            description:
              'Desligue da tomada quando não for mais assistir, pois o stand-by consome energia.',
          }
        ],
      },
      {
        name: 'Ventilador',
        icon: {
          dark: require('../assets/icons/bedroom/dark/fan.png'),
          light: require('../assets/icons/bedroom/light/fan.png')
        },
        models: [
          {
            name: 'Ventilador pequeno',
            power: 50,
            description:
              'Mantenha hélices e grades limpas para facilitar a circulação do ar',
          },
          {
            name: 'Ventilador grande',
            power: 130,
            description:
              'Mantenha hélices e grades limpas para facilitar a circulação do ar',
          },
          {
            name: 'Personalizado',
            power: 90,
            description:
              'Mantenha hélices e grades limpas para facilitar a circulação do ar',
          }
        ],
      },
      {
        name: 'Video Game',
        icon: {
          dark: require('../assets/icons/bedroom/dark/videogame.png'),
          light: require('../assets/icons/bedroom/light/videogame.png')
        },
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
          {
            name: 'Personalizado',
            power: 100,
            description:
              'Os equipamentos que ficam no modo stand-by podem prejudicar a economia de energia, pois continuam consumindo eletricidade.',
          }
        ],
      },
      {
        name: 'DVD',
        icon: {
          dark: require('../assets/icons/bedroom/dark/dvd.png'),
          light: require('../assets/icons/bedroom/light/dvd.png')
        },
        models: [
          {
            name: 'DVD',
            power: 10,
            description:
              'Os equipamentos que ficam no modo stand-by podem prejudicar a economia de energia, pois continuam consumindo eletricidade.',
          },
          {
            name: 'Personalizado',
            power: 10,
            description:
              'Os equipamentos que ficam no modo stand-by podem prejudicar a economia de energia, pois continuam consumindo eletricidade.',
          }
        ],
      },
      {
        name: 'Home theater',
        icon: {
          dark: require('../assets/icons/bedroom/dark/speaker.png'),
          light: require('../assets/icons/bedroom/light/speaker.png')
        },
        models: [
          {
            name: 'Home theater',
            power: 350,
            description:
              'Os equipamentos que ficam no modo stand-by podem prejudicar a economia de energia, pois continuam consumindo eletricidade.',
          },
          {
            name: 'Personalizado',
            power: 350,
            description:
              'Os equipamentos que ficam no modo stand-by podem prejudicar a economia de energia, pois continuam consumindo eletricidade.',
          }
        ],
      },
    ],

    kitchen: [{
      name: 'Batedeira',
      icon: {
        dark: require('../assets/icons/kitchen/dark/mixer.png'),
        light: require('../assets/icons/kitchen/light/mixer.png')
      },
      models: [
        {
          name: 'Batedeira - 180W',
          power: 180,
          description:
            '',
        },

        {
          name: 'Batedeira - 275W',
          power: 275,
          description:
            '',
        },

        {
          name: 'Batedeira - 350W',
          power: 350,
          description:
            '',
        },
        {
          name: 'Batedeira - 400W',
          power: 400,
          description:
            '',
        },
        {
          name: 'Batedeira - 500W',
          power: 500,
          description:
            '',
        },
        {
          name: 'Batedeira - 600W',
          power: 600,
          description:
            '',
        },
        {
          name: 'Batedeira - 750W',
          power: 750,
          description:
            '',
        },
        {
          name: 'Personalizado',
          power: 435,
          description:
            '',
        }
      ],
    },
    {
      name: 'Cafeteira',
      icon: {
        dark: require('../assets/icons/kitchen/dark/coffemachine.png'),
        light: require('../assets/icons/kitchen/light/coffemachine.png')
      },
      models: [
        {
          name: 'Cafeteira - 1000W',
          power: 1000,
          description:
            '',
        },
        {
          name: 'Personalizado',
          power: 1000,
          description:
            '',
        }
      ],
    },
    {
      name: 'Exaustor Fogão',
      icon: {
        dark: require('../assets/icons/kitchen/dark/exaust.png'),
        light: require('../assets/icons/kitchen/light/exaust.png')
      },
      models: [
        {
          name: 'Exaustor Fogão - 170W',
          power: 170,
          description:
            '',
        },
        {
          name: 'Personalizado',
          power: 170,
          description:
            '',
        }
      ],
    },
    {
      name: 'Fogão elétrico',
      icon: {
        dark: require('../assets/icons/kitchen/dark/cooker.png'),
        light: require('../assets/icons/kitchen/light/cooker.png')
      },
      models: [
        {
          name: 'Fogão elétrico - 1500W',
          power: 1500,
          description:
            '',
        },
        {
          name: 'Personalizado',
          power: 1500,
          description:
            '',
        }
      ],
    },
    {
      name: 'Forno elétrico',
      icon: {
        dark: require('../assets/icons/kitchen/dark/forno.png'),
        light: require('../assets/icons/kitchen/light/forno.png')
      },
      models: [
        {
          name: 'Forno elétrico',
          power: 1500,
          description:
            ' ',
        },
        {
          name: 'Personalizado',
          power: 1500,
          description:
            '',
        }
      ],
    },
    {
      name: 'Freezer',
      icon: {
        dark: require('../assets/icons/kitchen/dark/freezer.png'),
        light: require('../assets/icons/kitchen/light/freezer.png')
      },
      models: [
        {
          name: 'Freezer - 200W',
          power: 200,
          description:
            'Instalar longe das fontes de calor e de preferência em local ventilado',
        },
        {
          name: 'Personalizado',
          power: 200,
          description:
            'Instalar longe das fontes de calor e de preferência em local ventilado',
        }
      ],
    },
    {
      name: 'Frigobar',
      icon: {
        dark: require('../assets/icons/kitchen/dark/frigobar.png'),
        light: require('../assets/icons/kitchen/light/frigobar.png')
      },
      models: [
        {
          name: 'Frigobar',
          power: 70,
          description:
            '',
        },
        {
          name: 'Personalizado',
          power: 70,
          description:
            '',
        }
      ],
    },
    {
      name: 'Lavadora de louça',
      icon: {
        dark: require('../assets/icons/kitchen/dark/dishwasher.png'),
        light: require('../assets/icons/kitchen/light/dishwasher.png')
      },
      models: [
        {
          name: 'Lavadora de louça',
          power: 1400,
          description:
            'Economize água e energia elétrica lavando de uma só vez, a quantidade máxima de louça indicada pelo fabricante.',
        },
        {
          name: 'Personalizado',
          power: 1400,
          description:
            '',
        }
      ],
    },
    {
      name: 'Liquidificador',
      icon: {
        dark: require('../assets/icons/kitchen/dark/blender.png'),
        light: require('../assets/icons/kitchen/light/blender.png')
      },
      models: [
        {
          name: 'Liquidificador - 450W',
          power: 450,
          description:
            'Economize água e energia elétrica lavando de uma só vez, a quantidade máxima de louça indicada pelo fabricante.',
        },
        {
          name: 'Liquidificador - 500W',
          power: 500,
          description:
            'Economize água e energia elétrica lavando de uma só vez, a quantidade máxima de louça indicada pelo fabricante.',
        },
        {
          name: 'Liquidificador - 550W',
          power: 550,
          description:
            'Economize água e energia elétrica lavando de uma só vez, a quantidade máxima de louça indicada pelo fabricante.',
        },
        {
          name: 'Liquidificador - 650W',
          power: 650,
          description:
            'Economize água e energia elétrica lavando de uma só vez, a quantidade máxima de louça indicada pelo fabricante.',
        },
        {
          name: 'Liquidificador - 700W',
          power: 700,
          description:
            'Economize água e energia elétrica lavando de uma só vez, a quantidade máxima de louça indicada pelo fabricante.',
        },
        {
          name: 'Liquidificador - 900W',
          power: 900,
          description:
            'Economize água e energia elétrica lavando de uma só vez, a quantidade máxima de louça indicada pelo fabricante.',
        },
        {
          name: 'Liquidificador - 100W',
          power: 1000,
          description:
            'Economize água e energia elétrica lavando de uma só vez, a quantidade máxima de louça indicada pelo fabricante.',
        },
        {
          name: 'Liquidificador - 1200W',
          power: 1200,
          description:
            'Economize água e energia elétrica lavando de uma só vez, a quantidade máxima de louça indicada pelo fabricante.',
        },
        {
          name: 'Personalizado',
          power: 750,
          description:
            '',
        }
      ],
    },
    {
      name: 'Microondas',
      icon: {
        dark: require('../assets/icons/kitchen/dark/microwave.png'),
        light: require('../assets/icons/kitchen/light/microwave.png')
      },
      models: [
        {
          name: 'Microondas - 700W',
          power: 700,
          description:
            'Use corretamente a potência para aquecer a comida, para não usar mais que o tempo necessário.',
        },
        {
          name: 'Microondas - 1200W',
          power: 1200,
          description:
            'Use corretamente a potência para aquecer a comida, para não usar mais que o tempo necessário.',
        },
        {
          name: 'Microondas - 1400W',
          power: 1400,
          description:
            'Use corretamente a potência para aquecer a comida, para não usar mais que o tempo necessário.',
        },
        {
          name: 'Personalizado',
          power: 1100,
          description:
            '',
        }
      ],
    },
    {
      name: 'Refrigerador',
      icon: {
        dark: require('../assets/icons/kitchen/dark/geladeira.png'),
        light: require('../assets/icons/kitchen/light/geladeira.png')
      },
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
        {
          name: 'Personalizado',
          power: 215,
          description:
            '',
        }
      ],
    },
    {
      name: 'Sanduicheira',
      icon: {
        dark: require('../assets/icons/kitchen/dark/sandwich.png'),
        light: require('../assets/icons/kitchen/light/sandwich.png')
      },
      models: [
        {
          name: 'Sanduicheira - 640W',
          power: 640,
          description:
            '',
        },
        {
          name: 'Sanduicheira - 750W',
          power: 750,
          description:
            '',
        },
        {
          name: 'Sanduicheira - 850W',
          power: 850,
          description:
            '',
        },
        {
          name: 'Personalizado',
          power: 750,
          description:
            '',
        }
      ],
    },
    ],

    externalArea: [
      {
        name: 'Boiler',
        icon: {
          dark: require('../assets/icons/externalArea/dark/boiler.png'),
          light: require('../assets/icons/externalArea/light/boiler.png')
        },
        models: [
          {
            name: 'Boiler 100L',
            power: 2000,
            description:
              '',
          },
          {
            name: 'Boiler 200 a 500L',
            power: 4000,
            description:
              '',
          },
          {
            name: 'Boiler 200 a 500L com coletor solor',
            power: 2000,
            description:
              '',
          },
          {
            name: 'Personalizado',
            power: 4000,
            description:
              '',
          }
        ],
      },
      {
        name: 'Sauna',
        icon: {
          dark: require('../assets/icons/externalArea/dark/sauna.png'),
          light: require('../assets/icons/externalArea/light/sauna.png')
        },
        models: [
          {
            name: 'Sauna',
            power: 15000,
            description:
              '',
          },
          {
            name: 'Personalizado',
            power: 15000,
            description:
              '',
          }
        ],
      },
      {
        name: 'Bomba d\'água',
        icon: {
          dark: require('../assets/icons/externalArea/dark/plumb.png'),
          light: require('../assets/icons/externalArea/light/plumb.png')
        },
        models: [
          {
            name: 'Bomba d\'água 1/4 CV',
            power: 185,
            description:
              '',
          },
          {
            name: 'Bomba d\'água 1/2 CV',
            power: 370,
            description:
              '',
          },
          {
            name: 'Bomba d\'água 3/4 CV',
            power: 555,
            description:
              '',
          },
          {
            name: 'Bomba d\'água 1 CV',
            power: 740,
            description:
              '',
          },
          {
            name: 'Personalizado',
            power: 460,
            description:
              '',
          }
        ],
      },
      {
        name: 'Bomba de piscina',
        icon: {
          dark: require('../assets/icons/externalArea/dark/water-pump.png'),
          light: require('../assets/icons/externalArea/light/water-pump.png')
        },
        models: [
          {
            name: 'Bomba de piscina',
            power: 500,
            description:
              '',
          },
          {
            name: 'Personalizado',
            power: 500,
            description:
              '',
          }
        ],
      },
      {
        name: 'Churrasqueira elétrica',
        icon: {
          dark: require('../assets/icons/externalArea/dark/grill.png'),
          light: require('../assets/icons/externalArea/light/grill.png')
        },
        models: [
          {
            name: 'Churrasqueira elétrica',
            power: 3800,
            description:
              '',
          },
          {
            name: 'Personalizado',
            power: 3800,
            description:
              '',
          }
        ],
      },
      {
        name: 'Cortador de grama',
        icon: {
          dark: require('../assets/icons/externalArea/dark/lawn-mower.png'),
          light: require('../assets/icons/externalArea/light/lawn-mower.png')
        },
        models: [
          {
            name: 'Cortador de grama',
            power: 600,
            description:
              '',
          },
          {
            name: 'Personalizado',
            power: 600,
            description:
              '',
          }
        ],
      },
    ],

    bathroom: [
      {
        name: 'Chuveiro',
        icon: {
          dark: require('../assets/icons/bathroom/dark/shower.png'),
          light: require('../assets/icons/bathroom/light/shower.png')
        },
        models: [
          {
            name: 'Chuveiro - 5500W',
            power: 5500,
            description:
              'Nos meses quentes, ajuste a chave do chuveiro para a posição verão.',
          },
          {
            name: 'Chuveiro - 6400W',
            power: 6400,
            description:
              'Nos meses quentes, ajuste a chave do chuveiro para a posição verão.',
          },
          {
            name: 'Chuveiro - 7500W',
            power: 7500,
            description:
              'Nos meses quentes, ajuste a chave do chuveiro para a posição verão.',
          },
          {
            name: 'Chuveiro - 7800W',
            power: 7800,
            description:
              'Nos meses quentes, ajuste a chave do chuveiro para a posição verão.',
          },
          {
            name: 'Personalizado',
            power: 7200,
            description:
              'Nos meses quentes, ajuste a chave do chuveiro para a posição verão.',
          }
        ],
      },
      {
        name: 'Depilador',
        icon: {
          dark: require('../assets/icons/bathroom/dark/depilador.png'),
          light: require('../assets/icons/bathroom/light/depilador.png')
        },
        models: [
          {
            name: 'Depilador - 4W',
            power: 4,
            description:
              '',
          },
          {
            name: 'Depilador - 5W',
            power: 5,
            description:
              '',
          },
          {
            name: 'Depilador - 7,5W',
            power: 7.5,
            description:
              '',
          },
          {
            name: 'Personalizado',
            power: 5.5,
            description:
              '',
          }
        ],
      },

      {
        name: 'Secador de cabelo',
        icon: {
          dark: require('../assets/icons/bathroom/dark/hairdryer.png'),
          light: require('../assets/icons/bathroom/light/hairdryer.png')
        },
        models: [
          {
            name: 'Secador - 1250W',
            power: 1250,
            description:
              '',
          },
          {
            name: 'Secador - 1900W',
            power: 1900,
            description:
              '',
          },
          {
            name: 'Secador - 2000W',
            power: 2000,
            description:
              '',
          },
          {
            name: 'Secador - 2100W',
            power: 2100,
            description:
              '',
          },
          {
            name: 'Personalizado',
            power: 1800,
            description:
              '',
          }
        ],
      },
      {
        name: 'Torneira elétrica',
        icon: {
          dark: require('../assets/icons/bathroom/dark/sink.png'),
          light: require('../assets/icons/bathroom/light/sink.png')
        },
        models: [
          {
            name: 'Torneira elétrica - 4800W',
            power: 4800,
            description:
              'Evite ligá-la no verão quando a água, em geral, é mais quente.',
          },
          {
            name: 'Torneira elétrica - 5500W',
            power: 5500,
            description:
              'Evite ligá-la no verão quando a água, em geral, é mais quente.',
          },
          {
            name: 'Personalizado',
            power: 5150,
            description:
              '',
          }
        ],
      },
      {
        name: 'Banheira',
        icon: {
          dark: require('../assets/icons/bathroom/dark/bathtub.png'),
          light: require('../assets/icons/bathroom/light/bathtub.png')
        },
        models: [
          {
            name: 'Banheira de hidromassagem',
            power: 6600,
            description:
              '',
          },
          {
            name: 'Personalizado',
            power: 6600,
            description:
              '',
          }
        ],
      },
    ],

    serviceArea: [
      {
        name: 'Aspirador de pó',
        icon: {
          dark: require('../assets/icons/serviceArea/dark/vacuum-cleaner.png'),
          light: require('../assets/icons/serviceArea/light/vacuum-cleaner.png')
        },
        models: [
          {
            name: 'Aspirador de pó',
            power: 600,
            description:
              '',
          },
          {
            name: 'Personalizado',
            power: 600,
            description:
              '',
          }
        ],
      },
      {
        name: 'Máquina de costura',
        icon: {
          dark: require('../assets/icons/serviceArea/dark/sewing-machine.png'),
          light: require('../assets/icons/serviceArea/light/sewing-machine.png')
        },
        models: [
          {
            name: 'Maquina de costura',
            power: 100,
            description:
              '',
          },
          {
            name: 'Personalizado',
            power: 100,
            description:
              '',
          }
        ],
      },
      {
        name: 'Ferro de passar',
        icon: {
          dark: require('../assets/icons/serviceArea/dark/flatiron.png'),
          light: require('../assets/icons/serviceArea/light/flatiron.png')
        },
        models: [
          {
            name: 'Ferro de passar',
            power: 1000,
            description:
              'Ao desligar o ferro, aproveite o seu calor para passar as roupas mais leves.',
          },
          {
            name: 'Personalizado',
            power: 1000,
            description:
              'Ao desligar o ferro, aproveite o seu calor para passar as roupas mais leves.',
          }
        ],
      },
      {
        name: 'Lavadora de roupa',
        icon: {
          dark: require('../assets/icons/serviceArea/dark/washing-machine.png'),
          light: require('../assets/icons/serviceArea/light/washing-machine.png')
        },
        models: [
          {
            name: 'Lavadora de roupa',
            power: 500,
            description:
              'Procure usar toda a capacidade em uma mesma lavagem, evitando ligá-la muitas vezes.',
          },
          {
            name: 'Personalizado',
            power: 500,
            description:
              'Procure usar toda a capacidade em uma mesma lavagem, evitando ligá-la muitas vezes.',
          }
        ],
      },
      {
        name: 'Secadora de roupa',
        icon: {
          dark: require('../assets/icons/serviceArea/dark/secadora.png'),
          light: require('../assets/icons/serviceArea/light/secadora.png')
        },
        models: [
          {
            name: 'Secadora de roupa',
            power: 3500,
            description:
              '',
          },
          {
            name: 'Personalizado',
            power: 3500,
            description:
              '',
          }
        ],
      },
      {
        name: 'Tanquinho',
        icon: {
          dark: require('../assets/icons/serviceArea/dark/tanquinho.png'),
          light: require('../assets/icons/serviceArea/light/tanquinho.png')
        },
        models: [
          {
            name: 'Tanquinho',
            power: 270,
            description:
              'Procure usar toda a capacidade em uma mesma lavagem, evitando ligá-lo muitas vezes.',
          },
          {
            name: 'Personalizado',
            power: 270,
            description:
              'Procure usar toda a capacidade em uma mesma lavagem, evitando ligá-lo muitas vezes.',
          }
        ],
      },
    ],
  },
};
