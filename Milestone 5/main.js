/*
Milestone 5 - opzionale
● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
permette di cancellare il messaggio selezionato
● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti
*/

var app = new Vue(
  {
    el: '#root',

    data: {

      indiceDinamico: 0,
      contacts: [

        {
          name: 'Michele',
          avatar: './img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: './img/avatar_2.jpg',
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: './img/avatar_3.jpg',
          visible: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: './img/avatar_4.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: './img/avatar_5.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ],
        },
        {
          name: 'Claudia',
          avatar: './img/avatar_6.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Federico',
          avatar: './img/avatar_7.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Davide',
          avatar: './img/avatar_8.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received'
            }
          ],


        }

      ],

      newMessage: '',
      cerca: ""

    },


    methods: {

      //ANCHOR - funzione per far comparire le chat dell'utente
      visualizzaChat(index) {

        this.indiceDinamico = index;

      },


      //funzione per scrivere nuovi msg e metterli nell'array
      saveElement() {

        //crea la data di oggi
        let newDate = `${dayjs().date()}/${dayjs().month()}/${dayjs().year()} ${dayjs().hour()}:${dayjs().minute()}:${dayjs().second()}`;
        console.log(newDate);

        //crea nuovo messaggio inviato
        this.contacts[this.indiceDinamico].messages.push({
          date: newDate,
          message: this.newMessage,
          status: 'sent',
        },)

        //resetta il campo di imput dei messaggi inviati
        this.newMessage = '';

        //messaggio di risposta automatico dopo 1 sec
        setTimeout(() => {

          this.contacts[this.indiceDinamico].messages.push({
            date: newDate,
            message: 'ok',
            status: 'received',
          })
        }, 1000);
      },

      //ricerca dei nomi
      ricercaNomi() {
        this.contacts.forEach((element, index) => {
          //convertire il nomi in lettere minuscole
          let Name = element.name.toLowerCase();
          console.log(Name)

          if (Name.includes(this.cerca.toLowerCase())) {
            return element.visible = true
          } else {
            return element.visible = false
          }
        });

      },

      //funzione per l'ora nei contatti
      getLastHours(index) {

        let Date = this.contacts[index].messages.length - 1;

        return this.contacts[index].messages[Date].date.slice(10, 19)
      },

      //funzione per l'ora dei messaggi nella chat
      getLastHoursChat(elem) {

        return elem.date.slice(10, 19)
      },



      //funzione per l'ultimo messaggio inviato nell'elenco chat
      getLastMessage(index) {

        let Message = this.contacts[index].messages.length - 1;

        return this.contacts[index].messages[Message].message

      },

      //cancella messaggio dalla chat
      deleteMessage( index ) {
        this.contacts[this.indiceDinamico].messages.splice(index, 1)
      }
    },
  })

