import rootReducers from '../store/reducers'
import {setCards} from '../store/actions'

describe('reducers function', () => {
    it('testing reducer', () => {

        const mockData = [{
            "cardId": 1,
            "name": "Аккумуляторна стрічкова пила ",
            "price": "13073",
            "vendorCode": "dpb182z",
            "url": "./images/akkumulyatornaya-lentochnaya-pila-dpb182z-bez-akb.jpg",
            "power": "350 Вт"
        },
        {
            "cardId": 2,
            "name": "Аккумуляторна стрічкова пила ",
            "price": "13073",
            "vendorCode": "dpb182z",
            "url": "./images/akkumulyatornaya-lentochnaya-pila-dpb182z-bez-akb.jpg",
            "power": "350 Вт"
        }
        ]

        const mockDataExpect = {
            cards: [{ 
            "cardId": 1,
            "name": "Аккумуляторна стрічкова пила ",
            "price": "13073",
            "vendorCode": "dpb182z",
            "url": "./images/akkumulyatornaya-lentochnaya-pila-dpb182z-bez-akb.jpg",
            "power": "350 Вт"
        },
        {
            "cardId": 2,
            "name": "Аккумуляторна стрічкова пила ",
            "price": "13073",
            "vendorCode": "dpb182z",
            "url": "./images/akkumulyatornaya-lentochnaya-pila-dpb182z-bez-akb.jpg",
            "power": "350 Вт"
        }
    ]}

      expect(rootReducers({},setCards(mockData))).toStrictEqual(mockDataExpect)
    })
})