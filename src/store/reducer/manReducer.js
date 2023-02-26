
const defaultList = [
    { id: 1, name: 'Сергей', image: 'https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg', gender: 1 },
    { id: 2, name: 'Валера', image: 'https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg', gender: 1 },
    { id: 3, name: 'Роман', image: 'https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg', gender: 1 },
    { id: 4, name: 'Роман', image: 'https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg', gender: 1 },
    { id: 5, name: 'Ирина', image: 'https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg', gender: 2 },
    { id: 6, name: 'Ольга', image: 'https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg', gender: 2 },
    { id: 7, name: 'Светлана', image: 'https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg', gender: 2 },
    { id: 8, name: 'Валерия', image: 'https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg', gender: 2 }
]


export const manReducer = (state = defaultList, action) => {
    if (action.type === 'MAN_ADD') {
        return [...state, action.payload]
    } else {
        return state
    }
}