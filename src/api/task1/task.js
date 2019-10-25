task1 ={
    firstOfTask1: function (request, response)
    {
        const page = request.query.page;
    let PatientsOfTheClinic =[
           {
                fullName:"Зарацька Вікторія Петрівна",
                placeOfwork:"відділення нової пошти номер 8",
                vaccination_fromDiphtheriaOfthePatient:"незроблено"
            },
            {
                fullName:"Сливка Ліліянна Юріївна",
                placeOfwork:"художне училище",
                vaccination_fromDiphtheriaOfthePatient:"зроблено"
            },
            {
                fullName:"Мельник Мирослава Іванівна",
                placeOfwork:"УЗСШІзПВОП",
                vaccination_fromDiphtheriaOfthePatient:"зроблено"
            },
            {
                fullName:"Захаров Микола Іванович",
                placeOfwork:"прибиральник на вулиці Гагаріна",
                vaccination_fromDiphtheriaOfthePatient:"незроблено"
            },
            {
                fullName:"Сірко Мирослава Сергіївна",
                placeOfwork:"Ліцей 'Інтелект'",
                vaccination_fromDiphtheriaOfthePatient:"зроблено"
            },
            {
                fullName:"Корній Юрій Альбертович",
                placeOfwork:"журналіст каналу '1+1'",
                vaccination_fromDiphtheriaOfthePatient:"незроблено"
            },
    ];
    const begin = (page-1)*5;
    const end = begin + 5;
    response.send(PatientsOfTheClinic.slice(begin, end));
    }

}
module.exports=task1;


