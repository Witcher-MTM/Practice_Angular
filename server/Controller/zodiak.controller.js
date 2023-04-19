class ZodiakController {
    // ...

    async FindZodiak(req, res) {
        const { day, month , year } = req.body;
        console.log("Month: " + month + "\nDay: " + day)
        const dateOfBirth = new Date(`${year}-${month}-${day}`);
        const zodiacs = [
            { name: 'Овен', start: new Date(`2023-03-21`), end: new Date(`2023-04-19`) },
            { name: 'Телец', start: new Date(`2023-04-20`), end: new Date(`2023-05-20`) },
            { name: 'Близнецы', start: new Date(`2023-05-21`), end: new Date(`2023-06-21`) },
            { name: 'Рак', start: new Date(`2023-06-22`), end: new Date(`2023-07-22`) },
            { name: 'Лев', start: new Date(`2023-07-23`), end: new Date(`2023-08-22`) },
            { name: 'Дева', start: new Date(`2023-08-23`), end: new Date(`2023-09-22`) },
            { name: 'Весы', start: new Date(`2023-09-23`), end: new Date(`2023-10-23`) },
            { name: 'Скорпион', start: new Date(`2023-10-24`), end: new Date(`2023-11-21`) },
            { name: 'Стрелец', start: new Date(`2023-11-22`), end: new Date(`2023-12-21`) },
            { name: 'Козерог', start: new Date(`2023-12-22`), end: new Date(`2024-01-19`) },
            { name: 'Водолей', start: new Date(`2024-01-20`), end: new Date(`2024-02-18`) },
            { name: 'Рыбы', start: new Date(`2024-02-19`), end: new Date(`2024-03-20`) },
        ];
        console.log(dateOfBirth);
        console.log(zodiacs);
        const zodiac = (await (zodiacs.find((zodiak) => dateOfBirth >= zodiak.start && dateOfBirth <= zodiak.end)));
        
        if (!zodiac) {
            return res.status(400).json({ error: "Не удалось определить знак зодиака." });
        }
        res.status(200).json({ zodiac: zodiac.name });
    }
}
module.exports = new ZodiakController();