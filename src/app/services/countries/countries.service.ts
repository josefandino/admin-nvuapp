import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  data = [
    'Albania',
    'Alemania',
    'Andorra',
    'Angola',
    'Antigua y Barbuda',
    'Arabia Saudita',
    'Argelia',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaiyán',
    'Bahamas',
    'Bahrein',
    'Bangladesh',
    'Barbados',
    'Belarús',
    'Bélgica',
    'Belice',
    'Benin',
    'Bhután',
    'Bolivia',
    'Bosnia y Herzegovina',
    'Botswana',
    'Brasil',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Camboya',
    'Camerún',
    'Canadá',
    'Chad',
    'Chequia',
    'Chile',
    'China',
    'Chipre',
    'Colombia',
    'Comoras',
    'Congo',
    'Costa Rica',
    'Côte d’Ivoire',
    'Croacia',
    'Cuba',
    'Dinamarca',
    'Djibouti',
    'Dominica',
    'Ecuador',
    'Egipto',
    'El Salvador',
    'Emiratos Árabes Unidos',
    'Eritrea',
    'Eslovaquia',
    'Eslovenia',
    'España',
    'Estados Unidos de América',
    'Estonia',
    'Eswatini',
    'Etiopía',
    'Federación de Rusia',
    'Fiji',
    'Filipinas',
    'Finlandia',
    'Francia',
    'Gabón',
    'Gambia',
    'Georgia',
    'Ghana',
    'Granada',
    'Grecia',
    'Guatemala',
    'Guinea',
    'Guinea Ecuatorial',
    'Guinea -Bissau',
    'Guyana',
    'Haití',
    'Honduras',
    'Hungría',
    'India',
    'Indonesia',
    'Irán',
    'Iraq',
    'Irlanda',
    'Islandia',
    'Islas Cook',
    'Islas Marshall',
    'Islas Salomón',
    'Israel',
    'Italia',
    'Jamaica',
    'Japón',
    'Jordania',
    'Kazajstán',
    'Kenya',
    'Kirguistán',
    'Kiribati',
    'Kuwait',
    'Lesotho',
    'Letonia',
    'Líbano',
    'Liberia',
    'Libia',
    'Liechtenstein',
    'Lituania',
    'Luxemburgo',
    'Macedonia',
    'Madagascar',
    'Malasia',
    'Malawi',
    'Maldivas',
    'Malí',
    'Malta',
    'Marruecos',
    'Mauricio',
    'Mauritania',
    'México',
    'Micronesia',
    'Moldova',
    'Mónaco',
    'Mongolia',
    'Montenegro',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Nicaragua',
    'Níger',
    'Nigeria',
    'Niue',
    'Noruega',
    'Nueva Zelandia',
    'Omán',
    'Países Bajos(',
    'Pakistán',
    'Palau',
    'Panamá',
    'Papua Nueva Guinea',
    'Paraguay',
    'Perú',
    'Polonia',
    'Portugal',
    'Qatar',
    'Reino Unido de Gran Bretaña e Irlanda del Norte </a>',
    'República Árabe Siria',
    'República Centroafricana',
    'República de Corea',
    'República Democrática del Congo',
    'República Democrática Popular Lao',
    'República Dominicana',
    'República Popular Democrática de Corea',
    'República Unida de Tanzanía',
    'Rumania',
    'Rwanda',
    'Saint Kitts y Nevis',
    'Samoa',
    'San Marino',
    'San Vicente y las Granadinas',
    'Santa Lucía',
    'Santa Sede',
    'Santo Tomé y Príncipe',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leona',
    'Singapur',
    'Somalia',
    'Sri Lanka',
    'Sudáfrica',
    'Sudán',
    'Sudán del Sur',
    'Suecia',
    'Suiza',
    'Suriname',
    'Tailandia',
    'Tayikistán',
    'Timor-Leste',
    'Togo',
    'Tonga',
    'Trinidad y Tabago',
    'Túnez',
    'Turkmenistán',
    'Turquía',
    'Tuvalu',
    'Ucrania',
    'Uganda',
    'Uruguay',
    'Uzbekistán',
    'Vanuatu',
    'Venezuela',
    'Viet Nam',
  ];

  urlBase = '../../../assets/data/countries.json';

  constructor(
    private http: HttpClient
  ) { }

  getCountries() {
    return this.http.get(`${this.data}`);
  }

  paises() {
    return this.data;
  }
}