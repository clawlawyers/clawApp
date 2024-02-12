const callHistory =[
    {
        id:0,
        name: 'Martin Randolph',
        date: 'Today',
        time: '17 min ago',
        // direction : 1 is outgoing and direction: 0 is incoming
        direction: 1,
        // answered 1 is yes and 0 is a no, only for the purpose if direction is 0
        answered: 1,
        // duration in seconds
        duration: 123,
        imageUri:'https://picsum.photos/200'

    },
    {
        id:1,
        name: 'Martin Randolph',
        date: 'Yesterday',
        time: '4:50pm',
        // direction : 1 is outgoing and direction: 0 is incoming
        direction: 0,
        // answered 1 is yes and 0 is a no, only for the purpose if direction is 0
        answered: 1,
        // duration in seconds
        duration: 123,
        imageUri:'https://picsum.photos/200'

    },
    {
        id:2,
        name: 'Martin Randolph',
        date: 'Yesterday',
        time: '10:00am',
        // direction : 1 is outgoing and direction: 0 is incoming
        direction: 0,
        // answered 1 is yes and 0 is a no, only for the purpose if direction is 0
        answered: 0,
        // duration in seconds
        duration: 123,
        imageUri:'https://picsum.photos/200'

    }
]

export default callHistory