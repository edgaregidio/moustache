const hairdresser = [
  {
    id: 1,
    image: '',
    name: 'Gustavo Henrique',
    description: 'Cabelo, Barba',
    date: 'Segunda à Sábado',
    time: '08h às 18h',
    numbeAttendance: '6 atendimentos hoje'
  },
  {
    id: 2,
    image: '',
    name: 'João Pedro',
    description: 'Cabelo, Barba',
    date: 'Segunda à Sábado',
    time: '08h às 18h',
    numbeAttendance: '7 atendimentos hoje'
  },
  {
    id: 3,
    image: '',
    name: 'Fernando Miguel',
    description: 'Cabelo, Barba',
    date: 'Segunda à Sábado',
    time: '08h às 18h',
    numbeAttendance: '11 atendimentos hoje'
  },
  {
    id: 4,
    image: '',
    name: 'Pablo Daniel',
    description: 'Cabelo',
    date: 'Segunda à Sábado',
    time: '08h às 18h',
    numbeAttendance: '10 atendimentos hoje'
  },
  {
    id: 5,
    image: '',
    name: 'Arthur Felipe',
    description: 'Cabelo, Barba',
    date: 'Segunda à Sábado',
    time: '08h às 18h',
    numbeAttendance: '8 atendimentos hoje'
  },
  {
    id: 6,
    image: '',
    name: 'Heitor Raphael',
    description: 'Cabelo',
    date: 'Segunda à Sábado',
    time: '08h às 18h',
    numbeAttendance: '7 atendimentos hoje'
  },
];

module.exports = {
  index: async (req, res) =>{
      return res.json(hairdresser);
  }
}