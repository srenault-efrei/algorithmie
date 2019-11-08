

export default function scapeAge(planet, second) {

  let referenceSecond = 31557600;

  let year = 0;
  let options =
    [
      {
        planet: 'Earth',
        period: 365.25
      },
      {
        planet: 'Mercury',
        period: 0.2408467
      },
      {
        planet: 'Venus',
        period: 0.61519726
      },
      {
        planet: 'Mars',
        period: 1.8808158
      },
      {
        planet: 'Jupiter',
        period: 11.862615
      },
      {
        planet: 'Saturn',
        period: 29.447498
      },
      {
        planet: 'Uranus',
        period: 84.016846
      },
      {
        planet: 'Neptune',
        period: 164.79132
      }
    ]

  for (let [key, value] of Object.entries(options)) {

    if (planet == "Earth") {
      year = parseFloat (second / referenceSecond.toFixed(2));  
  }
  else if (planet == options[key]['planet']){
    year = parseFloat ((second / referenceSecond) / options[key]['period'].toFixed(2));

  }
}
  return parseFloat(year.toFixed(2));
}
