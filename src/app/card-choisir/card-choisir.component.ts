import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {QuestionService} from '../question/question.service';
import {CardChoisirService} from './card-choisir.service';

@Component({
  selector: 'app-card-choisir',
  templateUrl: './card-choisir.component.html',
  styleUrls: ['./card-choisir.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardChoisirComponent implements OnInit {

  questions: any []

  constructor(
    public questionService: QuestionService,
    public cardChoisir: CardChoisirService
  ) {
    this.questions = [
      {
        id: 1,
        question: 'Quem foi a primeira pessoa a viajar no Espaço?',
        options: [
          {text: 'Yuri Gagarin'},
          {text: 'A cadela Laika'},
          {text: 'Neil Armstrong'},
          {text: 'Marcos Pontes'}
        ],
        answer: 'Yuri Gagarin'
      },
      {
        id: 2,
        question: 'Qual a montanha mais alta do mundo?',
        options: [
          {text: 'Mauna Kea'},
          {text: 'Dhaulagiri'},
          {text: 'Monte Chimborazo'},
          {text: 'Monte Everest'},
          {text: 'Pico da Neblina'},
        ],
        answer: 'Monte Everest'
      },
      {
        id:3,
        question: 'Que país tem o formato de uma bota?',
        options: [
          {text: 'Butão'},
          {text: 'Brasil'},
          {text: 'Portugal'},
          {text: 'Itália'},
          {text: 'México'},
        ],
        answer: 'Itália'
      },
      {
        id: 4,
        question: 'Quanto tempo a Terra demora para dar uma volta completa em torno dela mesma?',
        options: [
          {text: 'Aproximadamente 24 horas'},
          {text: '365 dias'},
          {text: '7 dias'},
          {text: '365 ou 366 dias'},
          {text: '30 ou 31 dias'},
        ],
        answer: 'Aproximadamente 24 horas'
      },
      {
        id: 5,
        question: 'A que temperatura a água ferve?',
        options: [
          {text: '200 ºC'},
          {text: '-10 ºC'},
          {text: '180 ºC'},
          {text: '0 ºC'},
          {text: '100 ºC'},
        ],
        answer: '100 ºC'
      },
      {
        id: 6,
        question: 'Quantos ossos temos no nosso corpo?',
        options: [
          {text: '126'},
          {text: '206'},
          {text: '18'},
          {text: '300'},
          {text: '200'},
        ],
        answer: '206'
      },
      {
        id: 7,
        question: 'Qual o nome do jardim plantado por Deus para o 1º casal criado?',
        options: [
          {text: 'Jardim do Getsêmani'},
          {text: 'Rosas de Sarom'},
          {text: 'Jardim do Éden'},
          {text: 'Paraíso'}
        ],
        answer: 'Jardim do Éden'
      },{
        id: 8,
        question: 'Quantas pedras Davi pegou no riacho para enfrentar Golias?',
        options: [
          {text: '2'},
          {text: '4'},
          {text: '6'},
          {text: '5'}
        ],
        answer: '5'
      },{
        id: 9,
        question: 'Quem matou Caim?',
        options: [
          {text: 'Abel'},
          {text: 'Adão'},
          {text: 'Não se Sabe'},
        ],
        answer: 'Não se Sabe'
      },{
        id: 10,
        question: 'Qual filho de Jacó foi governador do Egito?',
        options: [
          {text: 'Judá'},
          {text: 'Moisés'},
          {text: 'José'},
        ],
        answer: 'José'
      },{
        id: 11,
        question: 'Quantos continentes existem?',
        options: [
          {text: '2'},
          {text: '8'},
          {text: '6'},
          {text: '3'}
        ],
        answer: '6'
      },{
        id: 12,
        question: 'Qual a maior floresta tropical do mundo?',
        options: [
          {text:  'Mata Atlântica'},
          {text: 'Pampas'},
          {text: 'Pantanal'},
          {text: 'Floresta Amazônica'},
          {text: 'Caatinga'},
        ],
        answer: 'Floresta Amazônica'
      },{
        id: 13,
        question: 'Qual o monumento famoso pela sua inclinação?',
        options: [
          {text:  'Torre Eiffel'},
          {text: 'Esfinge'},
          {text: 'Estátua da Liberdade'},
          {text: 'Cristo Redentor'},
          {text: 'Torre de Pisa'},
        ],
        answer: 'Torre de Pisa'
      },{
        id: 14,
        question: 'Kryptonita é a fraqueza de qual super-herói?',
        options: [
          {text:  'Batman'},
          {text: 'Hulk'},
          {text: 'Super-Homem'},
          {text: 'Capitão América'},
          {text: 'Flash'},
        ],
        answer: 'Super-Homem'
      },{
        id: 15,
        question: 'Quem pintou Mona Lisa?',
        options: [
          {text:  'Leonardo da Vinci'},
          {text: 'Salvador Dalí'},
          {text: 'Van Gogh'},
          {text: 'Tarsila do Amaral'},
          {text: 'Pablo Picasso'},
        ],
        answer: 'Leonardo da Vinci'
      },{
        id: 16,
        question: 'Onde Jesus estava quando Maria o esqueceu?',
        options: [
          {text:  'No Templo'},
          {text: 'No Monte'},
          {text: 'Em Casa'},
        ],
        answer: 'No Templo'
      },{
        id: 17,
        question: 'Uma mulher que tocou na roupa de Jesus foi curada de quê?',
        options: [
          {text:  'Lepra'},
          {text: 'Paralisia'},
          {text: 'Hemorragia'},
        ],
        answer: 'Hemorragia'
      },{
        id: 18,
        question: 'O que é maior',
        options: [
          {text:  'gigabyte'},
          {text: 'megabyte'},
        ],
        answer: 'gigabyte'
      },{
        id: 19,
        question: 'Que animal põe o maior ovo?',
        options: [
          {text:  'Beija-flor'},
          {text: 'Avestruz'},
          {text: 'Tartaruga-gigante'},
          {text: 'Galinha'},
          {text: 'Pavão'},
        ],
        answer: 'Avestruz'
      },{
        id: 20,
        question: 'Em que país foi construído o Muro de Berlim?',
        options: [
          {text:  ' Estados Unidos'},
          {text: 'China'},
          {text: 'Coreia do Norte'},
          {text: 'Alemanha'},
          {text: 'Brasil'},
        ],
        answer: 'Alemanha'
      },{
        id: 21,
        question: 'Quem foi que amarrou 300 raposas pelo rabo?',
        options: [
          {text:  'Saul'},
          {text: 'Davi'},
          {text: 'Sansão'},
        ],
        answer: 'Sansão'
      },{
        id: 22,
        question: 'Por quantas moedas Judas traiu Jesus?',
        options: [
          {text:  ' 10'},
          {text: '20'},
          {text: '30'},
        ],
        answer: '30'
      },{
        id: 23,
        question: 'Quantos dias durou o dilúvio?',
        options: [
          {text:  '20 Dias'},
          {text: '30 Dias'},
          {text: '40 Dias'},
        ],
        answer: '40 Dias'
      },{
        id: 24,
        question: 'Qual a nacionalidade de Napoleão Bonaparte?',
        options: [
          {text:  'Francesa'},
          {text: 'Brasileira'},
          {text: 'Mexicana'},
          {text: 'Japonesa'},
          {text: 'Egípcio'},
        ],
        answer: 'Francesa'
      },{
        id: 25,
        question: 'Depois do futebol, qual o esporte mais popular no Brasil?',
        options: [
          {text:  'Esqui'},
          {text: 'Vôlei'},
          {text: 'Hóquei no gelo'},
          {text: 'Golfe'},
          {text: 'Esgrima'},
        ],
        answer: 'Vôlei'
      },{
        id: 26,
        question: 'Que grande evento histórico aconteceu em 1822 no Brasil?',
        options: [
          {text:  'Descobrimento do Brasil'},
          {text: 'Ditadura Militar'},
          {text: 'Revolução de 1930'},
          {text: 'Independência do Brasil'},
          {text: 'Construção de Brasília'},
        ],
        answer: 'Independência do Brasil'
      },{
        id: 26,
        question: 'O que comemora no feriado do dia 21 de abril no Brasil?',
        options: [
          {text:  'Natal'},
          {text: 'Tiradentes'},
          {text: 'Independência do Brasil'},
          {text: 'Finados'},
          {text: 'Nossa Senhora Aparecida'},
        ],
        answer: 'Tiradentes'
      },{
        id: 27,
        question: 'Quem ficou muito inteligente por que só comia legumes?',
        options: [
          {text:  'José'},
          {text: 'Daniel'},
          {text: 'Salomão'},
        ],
        answer: 'Daniel'
      },{
        id: 28,
        question: 'Quem era Nicodemos?',
        options: [
          {text:  'Mestre da Lei'},
          {text: 'Cobrador de Imposto'},
          {text: 'Tetrarca'},
        ],
        answer: 'Mestre da Lei'
      },{
        id: 29,
        question: 'Qual dessas era parente de Maria, mãe de Jesus?',
        options: [
          {text:  'Marta'},
          {text: 'Isabel'},
          {text: 'Sara'},
        ],
        answer: 'Isabel'
      },{
        id: 30,
        question: 'João Batista batizava em que rio?',
        options: [
          {text:  'Rio Nilo'},
          {text: 'Rio Eufrates'},
          {text: 'Rio Jordão'},
        ],
        answer: 'Rio Jordão'
      },{
        id: 31,
        question: 'Quantos andares tem o maior prédio do mundo?',
        options: [
          {text:  '100'},
          {text: '200'},
          {text: '163'},
          {text: '25'},
          {text: '168'},
        ],
        answer: '163'
      },{
        id: 32,
        question: 'Jesus nasceu Nazaré?',
        options: [
          {text:  'verdadeiro'},
          {text: 'falso'},
        ],
        answer: 'falso'
      }
    ]
  }

  ngOnInit(): void {
  }

  setQuestion(question: any) {
    this.questionService.question.next(question);
    const questionsCompleted = this.cardChoisir.questionsCompleted.value;
    questionsCompleted.push(question.id);
  }
}
